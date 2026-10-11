/* Accessible behaviour first; GSAP progressively enhances the composition. */
(() => {
  'use strict';
  const api = window.EmpowerUI = window.EmpowerUI || {};
  api.init = function () {
    if (api.cleanup) api.cleanup();
    let disposed = false, media, roomTween, swapTween, calendarObserver;
    const removers = [];
    const $ = (s, root = document) => root.querySelector(s);
    const $$ = (s, root = document) => [...root.querySelectorAll(s)];
    const on = (target, event, fn, options) => {
      if (!target) return;
      target.addEventListener(event, fn, options);
      removers.push(() => target.removeEventListener(event, fn, options));
    };
    document.documentElement.classList.add('js');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hasGSAP = () => Boolean(window.gsap);
    const menu = $('.menu-toggle'), nav = $('.nav');
    function closeMenu(focus = false) {
      if (!menu || !nav) return;
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu +';
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (focus) menu.focus();
    }
    if (menu && nav) {
      menu.hidden = false;
      on(menu, 'click', () => {
        const open = menu.getAttribute('aria-expanded') !== 'true';
        menu.setAttribute('aria-expanded', String(open));
        menu.textContent = open ? 'Close −' : 'Menu +';
        nav.classList.toggle('is-open', open);
        document.body.classList.toggle('menu-open', open);
      });
      $$('a', nav).forEach(a => on(a, 'click', () => closeMenu()));
      on(document, 'keydown', e => {
        if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
      });
      on(document, 'click', e => { if (!e.target.closest('.header')) closeMenu(); });
      on(document, 'focusin', e => { if (!e.target.closest('.header')) closeMenu(); });
      on(window.matchMedia('(min-width: 761px)'), 'change', e => { if (e.matches) closeMenu(); });
    }

    const diagram = $('.room-diagram'), stations = $$('.station');
    const controls = $$('.room-controls button');
    const prototype = document.body.classList.contains('prototype');
    const coords = [[22,25],[50,22],[78,25],[19,52],[81,52],[22,78],[50,81],[78,78]];
    const captions = ['Start with your own space.', 'Train alongside a small group.', 'Up to 8 people. A coach beside you.'];
    function setRoomState(state, animate = true) {
      if (!diagram) return;
      state = Math.max(0, Math.min(2, Number(state)));
      const targets = stations.map((el, i) => {
        const spread = state === 0 ? .2 : state === 1 ? .6 : 1;
        return {el, left:50+(coords[i][0]-50)*spread, top:50+(coords[i][1]-50)*spread, scale:state === 0 ? .56 : state === 1 ? .8 : 1};
      });
      if (roomTween) roomTween.kill();
      if (hasGSAP() && animate && !reduced.matches) {
        roomTween = window.gsap.timeline({defaults:{duration:.75,ease:'power3.inOut'}});
        targets.forEach(({el,left,top,scale},i) => roomTween.to(el,{left:left+'%',top:top+'%',scale,overwrite:'auto'},i*.035));
        roomTween.to('.coach-node',{opacity:state===2?1:0,duration:.35},.2);
        if (state===2) roomTween.fromTo('.coach-connections path',{strokeDashoffset:100},{strokeDashoffset:0,duration:.65,stagger:.025,ease:'power2.out'},.35);
      } else {
        targets.forEach(({el,left,top,scale}) => {
          el.style.left=left+'%';el.style.top=top+'%';
          el.style.transform='translate(-50%, -50%) scale('+scale+')';
        });
        const coach=$('.coach-node');if(coach)coach.style.opacity=state===2?'1':'0';
      }
      controls.forEach((el,i)=>el.setAttribute('aria-pressed',String(i===state)));
      $$('.prototype-state-nav button').forEach((el,i)=>el.setAttribute('aria-pressed',String(i===state)));
      const text=$('.room-state-text');if(text)text.textContent=captions[state];
      diagram.dataset.state=String(state);
    }
    if (diagram) {
      setRoomState(2, false);
      if (prototype) {
        const group=$('.room-controls');if(group)group.hidden=false;
        controls.forEach((b,i)=>on(b,'click',()=>setRoomState(i)));
        $$('.prototype-state-nav button').forEach((b,i)=>on(b,'click',()=>setRoomState(i)));
      }
    }

    const options=$$('.training-option'), visual=$('.training-visual img'), tag=$('.training-visual .image-tag');
    let swapping=false, swapGeneration=0;
    options.forEach(option=>on(option,'toggle',()=>{
      if(!option.open || swapping)return;
      swapping=true;options.forEach(o=>{if(o!==option)o.open=false;});swapping=false;
      if(!visual)return;
      const generation=++swapGeneration;
      const src=option.dataset.image,alt=option.dataset.alt,label=option.dataset.label;
      function swap(){visual.src=src;visual.alt=alt;if(tag)tag.textContent=label;}
      function show(){
        if(disposed||generation!==swapGeneration)return;
        if(swapTween)swapTween.kill();
        if(hasGSAP()&&!reduced.matches){
          swapTween=window.gsap.timeline().to(visual,{opacity:.3,duration:.15}).call(swap).to(visual,{opacity:1,duration:.35,ease:'power2.out'});
        }else{swap();visual.style.opacity='1';}
      }
      if(window.Image){
        const preload=new window.Image();preload.src=src;
        if(preload.decode)preload.decode().then(show).catch(show);else show();
      }else show();
    }));

    // Day selection changes real content; it never represents a class reservation.
    const dayButtons=$$('.day-filters button'), days=$$('.schedule-day');
    function selectDay(day){
      if(!days.length)return;
      days.forEach(el=>{el.hidden=day!=='all'&&el.dataset.scheduleDay!==day;});
      dayButtons.forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.day===day)));
      $('#schedule-grid').classList.toggle('is-filtered',day!=='all');
      $('.schedule-status').textContent=day==='all'?'Showing the full published week.':'Showing '+day[0].toUpperCase()+day.slice(1)+' published start times.';
      if(window.ScrollTrigger)window.ScrollTrigger.refresh();
    }
    if(days.length){
      $('.schedule-tools').hidden=false;
      dayButtons.forEach(el=>on(el,'click',()=>selectDay(el.dataset.day)));
      if(window.matchMedia('(max-width: 760px)').matches)selectDay('monday');
    }

    // Load the official provider only after the visitor requests it.
    const calendarButton=$('.calendar-load'), embed=$('#calendly-embed');
    let calendarLoading=false, calendarMounted=false;
    function loadProvider(){
      if(window.Calendly)return Promise.resolve();
      if(window.empowerCalendlyLoading)return window.empowerCalendlyLoading;
      const promise=new Promise((resolve,reject)=>{
        const script=document.createElement('script');
        script.src='https://assets.calendly.com/assets/external/widget.js';
        script.async=true;
        let settled=false;
        const timer=window.setTimeout(()=>finish(new Error('Calendar connection timed out.')),15000);
        function finish(error){
          if(settled)return;settled=true;window.clearTimeout(timer);
          script.onload=script.onerror=null;
          if(error){script.remove();reject(error);}else resolve();
        }
        script.onload=()=>finish(window.Calendly?null:new Error('Calendar unavailable.'));
        script.onerror=()=>finish(new Error('Calendar connection unavailable.'));
        document.head.appendChild(script);
      });
      window.empowerCalendlyLoading=promise;
      promise.catch(()=>{if(window.empowerCalendlyLoading===promise)window.empowerCalendlyLoading=null;});
      return promise;
    }
    if(calendarButton&&embed){
      calendarButton.hidden=false;
      on(calendarButton,'click',async()=>{
        if(calendarLoading||calendarMounted)return;
        calendarLoading=true;calendarButton.disabled=true;
        const status=$('.calendar-status');
        status.textContent='Connecting to the studio’s Calendly calendar…';
        try{
          await loadProvider();
          if(disposed)return;
          $('#booking-calendar').hidden=false;
          calendarButton.setAttribute('aria-expanded','true');
          window.Calendly.initInlineWidget({url:embed.dataset.bookingUrl,parentElement:embed,resize:true});
          function labelFrame(){const frame=$('iframe',embed);if(frame)frame.title='Empower Fitness Hub published Calendly booking calendar';}
          labelFrame();
          if(window.MutationObserver){calendarObserver=new window.MutationObserver(labelFrame);calendarObserver.observe(embed,{childList:true,subtree:true});}
          calendarMounted=true;calendarButton.hidden=true;
          status.textContent='Check the event details and availability in Calendly below. If the calendar does not appear, use the direct link.';
        }catch(error){
          if(disposed)return;
          status.textContent='The calendar could not connect. Open Calendly directly below, or contact Emma.';
          calendarButton.textContent='Try opening the calendar again';
          calendarButton.disabled=false;
          $('#booking-calendar').hidden=true;
        }finally{calendarLoading=false;}
      });
    }

    function initMotion(){
      if(disposed||!hasGSAP()||!window.ScrollTrigger)return;
      if(media)media.revert();
      const gsap=window.gsap,ScrollTrigger=window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);media=gsap.matchMedia();
      media.add({desktop:'(min-width: 761px)',mobile:'(max-width: 760px)',reduce:'(prefers-reduced-motion: reduce)'},ctx=>{
        const {desktop,reduce}=ctx.conditions;
        if(reduce){setRoomState(2,false);return;}
        if($('.hero'))gsap.timeline({defaults:{ease:'power3.out',duration:.9}})
          .from('.hero-line',{yPercent:15,opacity:.3},0)
          .from('.hero-photo',{clipPath:'inset(0 100% 0 0)',duration:1.15},.12)
          .from('.hero-second .you',{rotation:-7,scale:.92,transformOrigin:'center'},.15);
        if(diagram&&!prototype){
          // Eight places remain visible. The only reveal explains coach attention.
          gsap.timeline({scrollTrigger:{trigger:diagram,start:'top '+(desktop?'78%':'85%'),once:true}})
            .from('.coach-node',{opacity:0,duration:.4,ease:'power2.out'})
            .fromTo('.coach-connections path',{strokeDashoffset:100},{strokeDashoffset:0,duration:.6,stagger:.025,ease:'power2.out'},.12);
        }
        $$('.section-label').forEach(el=>gsap.from(el,{scaleX:.8,transformOrigin:'left',duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
        if(desktop)$$('.person-photo img').forEach(el=>gsap.fromTo(el,{yPercent:-3,scale:1.08},{yPercent:3,scale:1.08,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:.7}}));
        if($('.closing h2'))gsap.from('.closing h2',{x:desktop?-45:-18,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'.closing',start:'top 85%',once:true}});
        return()=>{if(roomTween)roomTween.kill();setRoomState(2,false);};
      });
    }
    const refresh=()=>{if(!disposed&&window.ScrollTrigger)window.ScrollTrigger.refresh();};
    $$('img').forEach(im=>on(im,'load',refresh));
    on(window,'load',refresh,{once:true});
    const ready=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();
    ready.then(initMotion).catch(()=>{if(media)media.revert();setRoomState(2,false);});
    on(reduced,'change',()=>{if(reduced.matches){if(roomTween)roomTween.kill();if(swapTween)swapTween.kill();if(visual)visual.style.opacity='1';setRoomState(2,false);}});
    function stopMotion(){if(media){media.revert();media=null;}if(roomTween)roomTween.kill();if(swapTween)swapTween.kill();}
    on(window,'pagehide',stopMotion);
    on(window,'pageshow',e=>{if(e.persisted)initMotion();});
    api.cleanup=()=>{
      disposed=true;stopMotion();removers.forEach(fn=>fn());
      if(calendarObserver)calendarObserver.disconnect();
      closeMenu();
    };
    return api.cleanup;
  };
  api.init();
})();
