# Empower Fitness Hub — “Room for You”

Independent, unofficial website concept. This is not an official Empower website.

## Contents

The root index.html is the homepage. Supporting pages use folders containing index.html:

- classes/ — five verified class types
- personal-training/ — individual programmes
- our-team/ — Emma and Dean
- class-timetable/ — accessible weekly schedule, day filters and original graphic
- contact/ — address, hours, email, phone and consultation link
- book/ — consultation contact actions, current Calendly context and opt-in calendar
- faq/ — practical questions
- before-after/ — member experience and eleven original progress photographs
- preview-notice/ — concept status and launch requirements
- home/ — retained legacy home route
- prototype.html — opening and three-state signature experience
- 404.html — custom fallback

The assets folder contains local photographs, licensed fonts, styles, interaction code and GSAP 3.14.2 with ScrollTrigger. There are no runtime package installs, enquiry forms, payments or invented memberships. Calendly is the only progressively loaded booking dependency; its official widget is requested after a visitor opens the calendar.

## Publish with GitHub Pages

1. Sign into GitHub. Create a **public repository named empower-fitness-preview**. Initialise it with a README so main exists.
2. Extract Empower-Fitness-GitHub-Pages.zip. Open the extracted empower-fitness-preview folder.
3. In the new repository choose **Add file → Upload files**. Upload the **contents** of that folder, preserving assets and every page folder. **index.html must be at the repository root.** Upload the files themselves, not the ZIP or an extra enclosing project folder.
4. Commit to main.
5. Open **Settings → Pages**. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**. Save.
6. Use the URL GitHub displays after publishing. Do not assume publication succeeded until that URL opens correctly.
7. Check every page, especially class-timetable/, book/, before-after/, classes/, contact/ and prototype.html, including direct page loads and refreshes. Confirm images, navigation and absence of browser errors.
8. Leave **Custom domain** empty.

Normal links are relative, so repository subpaths work. The 404 fallback uses /empower-fitness-preview/. For a different repository name, regenerate:

    PREVIEW_BASE_PATH=/your-repository-name/ python3 build_site.py

For an account-level Pages site, use PREVIEW_BASE_PATH=/.

No deployment build command is required: generated pages are included. The .nojekyll marker is included; if your file browser omits it, create an empty .nojekyll file at the repository root.

[Official publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Editing

Edit shared content in build_site.py, then run:

    python3 build_site.py

Edit layout in assets/styles.css and behaviour in assets/app.js. Upload regenerated files after editing. Python uses only the standard library; fonts and GSAP are hosted locally.

Timetable content lives in data/timetable.json. Edit the verified day/time entries and status, then regenerate and upload the pages. Do not add class types or availability until the owner supplies them. Gallery provenance and dimensions live in data/gallery.json.

## Booking and monitoring

See docs/Booking-Operations.md. The existing published link was inspected on 11 October 2026: it shows **NutriFit consultation**, **45 min**, **Phone call**, with no dates available in the displayed October calendar. The local booking page therefore puts email and telephone first, and describes the existing calendar accurately. The owner must confirm the correct fitness consultation event and enable availability before calendar booking can be called operational. No test appointment was submitted.

Appointments stay in the owner’s Calendly account. Its Calendar view, host notification emails and connected Google/Outlook calendar provide monitoring; GitHub Pages stores no booking records or secrets. Class reservations require confirmed recurring sessions and capacity settings in an owner-managed booking service.

## Verification and launch

Read docs/Creative-Research-and-Handover.md and docs/static-qa.json. All 13 routes, local references, navigation, timetable filters, cleanup/reinitialisation and simulated booking load/failure were checked. The complete single-file preview now includes all routes and supports hash navigation; its filename remains Empower-Fitness-Homepage.html for continuity. Rendered layout, live animation, Lighthouse and browser accessibility testing remain outstanding because the prescribed local browser tool was unavailable.

Confirm current timetable, personal training formats, prices, qualifications, booking availability and photograph permissions before launch. Add approved business privacy/legal policies, redirects and supported structured data. Remove preview noindex directives only for an owner-approved official launch.

## Publication status

**Not deployed.** The GitHub connector lacked repository-creation and Pages controls; the browser required GitHub sign-in. No live URL is claimed.
