# Booking setup and owner monitoring

Checked 11 October 2026. This is a handover guide, not a configured administration service.

## Current public destination

Empower’s website links to https://calendly.com/empowerfitnesshub/30min. Direct browser inspection showed **Emma McGrath / NutriFit consultation / 45 min / Phone call**. Every date in the displayed October 2026 calendar was disabled; next-month navigation was also disabled. No appointment or personal information was submitted.

The URL slug does not establish the duration. The original website advertises a free initial consultation, but this event’s name and format do not establish that it is the general fitness consultation. The website now leads with real email and phone actions, and accurately describes the optional existing calendar.

The owner must confirm the intended event and enable genuine availability before online consultation booking can be considered operational.

## Owner setup

1. Sign into the business-owned Calendly account. Confirm which event represents the fitness consultation, its duration, location, host and cost. If a new approved link is needed, replace `BOOK` in `build_site.py` and regenerate the website.
2. Connect the trainer’s working Google or Outlook calendar. Select the calendars to check for conflicts and the calendar where appointments should be added. Confirm Europe/Dublin scheduling settings and check how a visitor’s time zone is displayed.
3. Set real weekly availability, holidays, minimum notice and buffers. Preview the chosen event and troubleshoot unexpected blocked times.
4. Check host notification delivery and invitee confirmations. Configure reminders only where the owner’s plan supports them.
5. With owner approval, book one controlled test appointment using authorised details. Verify receipt in Calendly, the connected calendar and both email inboxes; then test rescheduling and cancellation. No such test has been performed here.

## Monitoring

Use Calendly’s **Calendar** view to review appointments and manage changes. Host booking emails provide notification; a connected calendar checks busy times and receives appointments. The website only displays the provider’s booking flow. It stores no appointment database, credentials or API tokens.

Assign one owner to check upcoming appointments daily, monitor the booking inbox and maintain availability. A dashboard on the public website is unnecessary for this workflow; administrative access belongs in Calendly.

## Class reservations

The published timetable has start times but no verified class type at each time or current availability. It cannot safely become a reservation calendar by turning those times into buttons.

Before implementing class reservations, obtain the owner’s recurring schedule, class names, hosts, eight-person capacity, membership/payment rules, cancellation policy, holidays and any existing member-booking service. Use the business’s existing service if suitable, or select an owner-managed class scheduler after evaluating those requirements. Keep live capacity and membership records in that service rather than GitHub Pages.

## Website implementation

`book/index.html` contains email/phone actions and an opt-in Calendly embed. `assets/app.js` loads the official widget only after a visitor requests it, uses one auto-resizing embed, adds an iframe title, handles script failure/timeouts and retains a direct booking link. Calendly’s own cookie controls remain enabled. Confirmation comes from Calendly; no success message is fabricated by the website.

`data/timetable.json` controls the accessible timetable. Edit confirmed information, run `python3 build_site.py`, and publish the regenerated files. Until confirmation, retain the dated-source notice and avoid claims about available spaces.

## Official documentation

- [Manage appointments](https://calendly.com/help/how-to-manage-your-meetings)
- [Booking notifications](https://calendly.com/help/calendly-scheduling-notifications)
- [Calendar connections](https://calendly.com/help/connect-your-calendar-to-calendly)
- [Embed implementation](https://calendly.com/help/advanced-calendly-embed-for-developers)
- [Original timetable](https://www.empowerfitnesshub.ie/class-timetable)

## Verification limits

DOM tests exercised successful widget initialisation with a simulated provider, load failure, retry, accessible labelling and direct fallback presence. The public Calendly page was inspected in a browser. The embedded widget inside this redesign, booking submission, owner notification delivery, connected-calendar conflicts and live availability have not been tested end to end.
