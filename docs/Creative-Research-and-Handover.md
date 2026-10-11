# Empower Fitness Hub — Room for You

Independent redesign concept. Updated 11 October 2026. Awwwards is a creative ambition; no nomination or award is claimed.

## Verified business summary

| Fact | Source |
|---|---|
| Trainer-led studio in Lucan village; all levels welcome | [Homepage](https://www.empowerfitnesshub.ie/) and [FAQ](https://www.empowerfitnesshub.ie/faq) |
| Maximum eight people per class; 45-minute sessions; no independent open-gym access | [FAQ](https://www.empowerfitnesshub.ie/faq) |
| Strength and conditioning, HIIT, Mama & Baba Fit, Boxercise, flexibility and mobility | [Classes](https://www.empowerfitnesshub.ie/classes) |
| Individual programmes, free initial consultation, support and nutrition guidance | [Personal training](https://www.empowerfitnesshub.ie/personal-training) |
| Emma McGrath: owner/personal trainer; Dean Foley: trainer. Qualifications come from their published profiles | [Team](https://www.empowerfitnesshub.ie/our-team) |
| Consultation destination: calendly.com/empowerfitnesshub/30min | Linked by [Contact](https://www.empowerfitnesshub.ie/contact); live browser inspection on 11 October 2026 showed NutriFit consultation, 45 minutes, phone call, with no available dates in the displayed October calendar; owner confirmation required |
| Millbank House, Lower Lucan Road, St. Edmondsbury, Lucan, Co. Dublin, K78 C8D9; free parking | [Contact](https://www.empowerfitnesshub.ie/contact) |
| emma@empowerfitnesshub.ie; 085 859 2838. Published hours: Mon–Thu 6am–9pm; Fri 6am–7.30pm; Sat/Sun 9am–12.30pm | [Contact](https://www.empowerfitnesshub.ie/contact) |
| Timetable is an image with a filename dated 2023 | [Timetable](https://www.empowerfitnesshub.ie/class-timetable). This is an asset clue, not proof the schedule is obsolete |
| Original routes include /home and the service pages | [Sitemap](https://www.empowerfitnesshub.ie/sitemap.xml) |
| Squarespace implementation | Direct homepage source inspection found SQUARESPACE_CONTEXT and Squarespace asset infrastructure |

Preserved official socials: [Instagram](https://instagram.com/empowerfitnesshub), [Facebook](https://www.facebook.com/profile.php?id=100078757430092), [YouTube](https://www.youtube.com/@empowerfitnesshub).

**Audience inference:** local people seeking coaching, confidence or consistency; beginners apprehensive about a larger gym; parents fitting training around family life. These are positioning hypotheses, not measured segments.

**Decision journey:** Will I feel comfortable? → What can I do here? → Who guides me? → Does it fit my week? → Free consultation. No shopping, pricing or membership offer was invented.

## Existing experience: inspected problems

- Eight-person limits and session duration are buried in the FAQ.
- The homepage opening repeats the logo rather than showing real coaching; promotional graphics follow it.
- Hero contact and header consultation actions have different destinations.
- Original footer telephone link goes to a Google search; the redesign uses a direct call link.
- The timetable lacked a text transcription.
- Source inspection found no h1 on the original homepage.

No performance diagnosis, conversion uplift or user-research result is claimed.

## Selected reference analysis

| URL | Evidence and useful technique | Original adaptation | Exclude |
|---|---|---|---|
| [SixFour Fitness, Dublin](https://sixfourfitness.ie/) | Page foregrounds small-group format and coach attention, then helps visitors recognise their needs | Put Empower’s own group size and beginner support early | Women-only positioning, six-person limit, programmes and prices |
| [Foundry, UK](https://foundryfit.com/) | Inspected page connects finding a fit with training formats and enquiry | Help visitors self-select before a conversation | Multi-location search and Foundry’s claims |
| [BEAT81, Europe](https://www.beat81.com/) | Live DOM shows goal-led workout choices and a training-method narrative | Explain why someone might choose each verified class | App, tracking, shop or offers. Cloud rendering did not fully display imagery; motion unverified |
| [Codrops typography/image demo](https://tympanus.net/Development/ImageExpansionTypography/) and [author’s explanation](https://tympanus.net/codrops/2024/04/02/on-scroll-expanding-image-animation-within-typography/) | Browser composition inspected; author documents image expansion displacing typography. Full image motion was not reliably visible | Actual coaching image shares space with the headline; mobile composition rebuilt independently | Complete layout, assets, prose or code |

[GSAP Showcase](https://gsap.com/showcase/) and [Awwwards’ Azzerad listing](https://www.awwwards.com/sites/azzerad-studios) were checked for range. Azzerad’s actual site could not be accessed; no interaction observation is claimed. Studio Freight exposed insufficient retrieved content and was not used as an observed motion reference.

## Three creative propositions

| Proposition | Business connection, atmosphere and spatial language | Behaviour and customer value |
|---|---|---|
| Your training journal | Individual coaching expressed as a notebook: numbered entries, compact type, image annotations and generous notes | Entries expand into programme explanations; makes guidance feel considered |
| Find your rhythm | Guided 45-minute sessions become effort, recovery and reset: banded compositions and rhythmic type | Alternating movement and class selection; communicates variety, but may overemphasise intensity for beginners |
| **Room for you — chosen** | Maximum-eight training becomes visible space: eight-part graphics, open typography, coaching image within type, turquoise from the studio and pink from the existing identity | Eight visible participant places connect to a coach in the production scene; the three-state composition remains in the prototype; makes attention tangible |

The selected proposition combines a verified differentiator with the visitor’s likely emotional barrier. It works as a still composition as well as an interaction.

## Concrete departures and art direction

The predictable gym page would use an athlete hero, slogan, pricing cards, class tiles, review slider and identical fade-up sections.

This implementation uses a photograph inside the headline; an eight-person schematic; an expanding numbered class menu; offset trainer portraits; a numbered weekly timetable; practical first-visit guidance; and a final action echoing the opening.

Type: Barlow Condensed 700 for headings; Manrope 400/600/700 for reading. Self-hosted WOFF2 fonts and OFL licences are included. Warm white #f3f3ed, charcoal #202323, turquoise #71dce2 and pink #d90067 relate to the studio.

Photography uses only official studio/portrait images. Class-menu photographs demonstrate real coaching; they do not establish that a pictured session was specifically HIIT or mobility. No stock or generated person is portrayed as an actual team member.

Rhythm: type-led opening → graphic explanation → class menu → darker individual-coaching scene → portraits → member’s words → visit guidance → final action.

Mobile rebuilds the opening into a word composition followed by a wider photograph. There is no sticky class image, portrait parallax, horizontal scene or scroll pinning. A small consultation link stays available.

## Signature prototype and motion plan

prototype.html was built before the full page set. It includes the opening, signature diagram, Before/During/After buttons and representative content. The illustration always represents eight participants; it is neither a floor plan nor live availability.

| Scene | Trigger | Start | End | Purpose | Mobile | Reduced motion |
|---|---|---|---|---|---|---|
| Opening | Fonts ready | Slight type offset, clipped image and rotated “you” | Settled type and full image | Unify words, photography and visitor’s place | Separate image row | Final state |
| Group diagram | Enters viewport once | Eight places visible; coach connections not yet drawn | Visible coach and connections | Explain coach attention | Unpinned, no decorative controls | Complete static state |
| Class menu | Native details opens | Previous photo | Associated coaching photo | Connect selection and image | Image above content | Instant swap |
| Portraits | Desktop native scroll | Slightly raised crop | Slightly lowered crop | Restrained human-section depth | Static | Static |
| Rules | Enters viewport | 80% width | Full width | Reinforce structure | Brief expansion | Static |
| Final action | Enters viewport | Small horizontal offset | Settled heading | Echo opening | Smaller offset | Static |

Opening: 0.9s power3.out; image 1.15s with 0.12s overlap. Production diagram: 0.4s coach reveal, 0.6s connection drawing with 0.025s offsets. Three-state prototype: 0.75s power3.inOut and 0.035s participant offsets. Photo switch: 0.15s out, 0.35s return.

Only GSAP core and ScrollTrigger are used. matchMedia handles responsive and reduced-motion states; contexts revert on media/page lifecycle changes. Font/image readiness refreshes triggers. SVG expresses coach connections; WebGL is unnecessary. No custom cursor, marquees, smoothing or expensive render loop.

Official guidance: [GSAP](https://gsap.com/docs/v3/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

## Verification and second pass

Passed: 13 HTML outputs; 429 local references; asset and fragment existence; unique IDs; one h1 per page; valid label references; image alt attributes and reserved dimensions; image decoding; font files; JavaScript syntax. DOM checks cover menu open/Escape/close, cleanup/reinitialisation, class image switching, three prototype states, reduced-motion fallback, desktop/mobile timetable selection, and simulated calendar load/failure/retry. The complete single-file preview passed checks for all 13 routes and 299 local navigation links. These are DOM and structural checks, not rendered-browser evidence.

Calculated contrast: ink/paper 14.22:1; ink/turquoise 9.83:1; white/pink 5.06:1. Pink/turquoise is 3.14:1 and is avoided for small text by using darker hover text.

The second pass corrected the timetable transcription from the full-size image; replaced a bold-only download with actual font weights; and tightened mobile headings using font metrics. It also fixed no-JavaScript mobile navigation, increased footer link targets and added coach connections.

**Not tested:** rendered desktop/mobile layout, live GSAP choreography, browser resizing/scroll, keyboard traversal, screen readers, console errors, Lighthouse, live deployment or real-user performance. The installed workflow requires a local browser-control capability that was unavailable. Original/reference sites were separately inspected in the cloud browser. Structural and DOM checks do not establish WCAG conformance or award-level craft.

## Deployment, migration and launch

Buildless static HTML/CSS/JS; optional standard-library Python generator. Generated files included. Root README has exact GitHub upload and Pages settings.

Original service, team, FAQ, contact, timetable, before-after and home routes have matching folder outputs. The final host should preserve old paths or redirect to canonical trailing-slash counterparts. The member page now includes eleven unique photographs from the original transformation gallery, preserves their montages, provides image enlargement links and links the original source. No names, quantities or outcomes were inferred.

All preview pages use noindex,nofollow,noarchive and a visible unofficial notice. No forms collect data. Consultation actions open the local booking/contact page. The existing Calendly widget loads only after the visitor requests it; it retains its own cookie controls and confirmation.

**Not published:** GitHub file access existed, but repository creation/Pages controls were absent; the browser required sign-in. No verified live URL.

Final-platform options: **Webflow** is a strong editing/motion candidate ([official GSAP support](https://help.webflow.com/hc/en-us/articles/40538857574419-Use-GSAP-in-Webflow)); **retain Squarespace** for familiar editing, subject to custom-code assessment ([platform](https://www.squarespace.com/websites)); **custom WordPress** for broader content control with agreed maintenance ([official theme platform](https://wordpress.org/themes/)). These require appropriate rebuilds and owner handover. No price quoted.

Confirm current timetable, class/PT formats, prices, trainer details and qualifications, photograph rights/member consent, the correct consultation event and live booking availability, legal policies, redirects and maintenance ownership before official launch.


## Functional revision — 11 October 2026

The earlier standalone download represented the homepage only. Its replacement keeps the filename Empower-Fitness-Homepage.html but now contains the full website: all 13 routes, including supporting business pages, retained home route, prototype and 404. In that review file, hash URLs support navigation without a server. The GitHub Pages package retains separate static pages and relative links.

Three weaknesses addressed: the production diagram’s decorative state buttons were removed; the timetable became a readable weekly layout with day selection and a verified JSON content source; and the member page now presents its complete public gallery. The eight-place diagram is no longer repeated on the individual personal-training page.

The consultation journey now leads with email/phone because direct browser inspection of the official Calendly destination found a mismatch: **NutriFit consultation, 45-minute phone call**, with no available October dates displayed. This is a current observation, not a claim that the service will remain unavailable. The page accurately labels the optional calendar and does not advertise bookable general fitness slots.

Owner monitoring uses the business’s Calendly Calendar view, booking emails and a connected Google/Outlook calendar. Configuration, end-to-end confirmation and class reservation rules require owner access. See [Booking-Operations.md](Booking-Operations.md) for exact setup and verification steps. No administrative dashboard, client database or API secret is placed in the public website.

The GitHub repository for this project is still absent from the accessible repositories, and repository creation/Pages controls are unavailable through the connected tools. No live deployment is claimed. The root README includes exact deployment settings and routes to check after publishing.
