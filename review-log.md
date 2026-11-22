# Review Log — Delia Logigan FMCG Portfolio

> Following `markup-and-review/SKILL.md`; **review process and history**. Current active review: Print & Digital Ad Hocs R016 desktop Instagram cards; earlier case-study decisions retained below.

## Current state

- **Project:** Delia Logigan FMCG / packaging portfolio
- **Reviewed baseline:** R014, Print & Digital Ad Hocs desktop social-content cards (all earlier review history preserved below)
- **Latest produced version:** R016, symmetric left/right Instagram card content inset; awaiting visual approval
- **Latest review:** Instagram symmetry review, 12 Nov 2026; user approved proposed R016 fix ("perfect") after annotating R014 in `image(20261112-230117).png`
- **Scope:** Three Instagram white cards and future media overlays within Print & Digital Ad Hocs; all other components and case-study pages preserved
- **Status:** R016 implemented; desktop visual preview prepared, **awaiting user verdict**. R016 implementation authorization is not result acceptance.

### Explicitly approved / locked

| ID | Element | Scope and preservation |
| --- | --- | --- |
| SHELL-01 | Centred responsive container | Preserve responsive centring/gutters; 1280px requested maximum supersedes 1270px; user authorized this in Review 003 |
| IMG-ROUTE-01 | Developing chosen Route 3 artwork | User marked the three large vertically stacked images **good**; preserve their large size, grouping, order and uncropped appearance |

### Authorized and implemented changes (result awaiting user review)

| ID | Target | User feedback → proposal |
| --- | --- | --- |
| LAY-01 | Shared site shell | Change max width from 1270px to 1280px while retaining centring and responsive gutters |
| TYPE-01 | All project pages | Standardise H1/H2/body/blue micro-label typography and heading/copy column proportions; preserve original written copy |
| HERO-01 | Biona opening title | Reduce oversized four-line H1, target two lines if that is the user's intention; exact count needs confirmation |
| ALIGN-01 | Two-column chapter intros | Align right-hand copy tops with the corresponding large headings; enforce gap; prevent collision |
| LABEL-01 | Blue micro-labels | Increase subtly, preserving technical understated appearance |
| HEAD-01 | Competitors mood board; competitor analysis | Shrink long headings to standard H2 and increase gutter so they never overlap adjacent copy |
| HEAD-02 | Sketch development | Retitle to **Initial sketches** (proposal) to avoid 'development' reaching beneath the paragraph |
| ROUTE-01 | Routes 1, 2, 3 | Remove small “01 of 03 / 02 of 03 / 03 of 03” suffixes; keep the Route headings and images |
| HEAD-03 | Developing chosen route 3 | Align text's first line to heading top/column without intersection; preserve approved three large visuals |
| HEAD-04 | Shelf impact | Shorten heading from “Shelf impact — before & after” to “Shelf impact”; keep both shelf images and copy |
| HEAD-05 | New product release | Remove large “— line extension” continuation, keep “New product release” heading and full copy/images |
| HEAD-06 | Meet the new look | Reduce/adjust heading to two lines and same H2 scale as other sections; retain complete final advert |
| CLEAN-01 | Reflection | Remove tiny blue “08 / REFLECTION” eyebrow only; preserve Reflection heading and original text |
| CLEAN-02 | End of page | Remove next-project “Machandel ↗” navigation block; preserve rest of page and footer unless approved otherwise |

### Pending clarification

- None. User selected **two lines** for the main title and approved all changes.

### No-change rule

Preserve original copy, image sequence/content and unannotated elements. Implement only approved items and necessary minimal dependencies. Future case studies inherit final approved typography and spacing system only after Biona approval.

## Review history — append only

### Review 001 — 2026-11-11

- **Reviewed version/view:** R001, desktop Biona Rice Cakes case study, entire long page.
- **Source version:** `../delia-logigan-portfolio-max-1270px.zip`
- **Annotations:** `../project1-01.png`, 206×2048 pixels. Upscaling cannot recover the missing text detail.
- **Verdicts and interpretation:**
  - [SHELL-01] GOOD — user explicitly likes the responsive container; preserve responsive-centred pattern.
  - [SHELL-02] CHANGE — change maximum content width from 1270px to 1280px throughout site.
  - [TYPE-01] CHANGE — future projects must have consistent title and body sizes based on finalised Biona case study.
  - [IMG-ROUTE-01] GOOD — green “good” marking beside the 3 chosen-route artworks; keep their large image presentation.
  - [ANNO-01 / ANNO-02] PENDING — multiple red annotation regions visible but the written instructions are illegible due to very small uploaded width; do not guess their intent.
- **Unannotated areas:** Preserve unchanged; not considered approved.
- **Proposed plan:** preserve current desktop layout framework, implement 1280px width and cross-project type tokens after approval, then make exact section changes when markup is legible and approved.
- **Authorization:** Pending. No code edits authorized/implemented in this review round.
- **Implementation:** None. `review-log.md` created as working record only.
- **Locked-element technical exceptions:** None.
- **Resulting preview(s):** None yet; revisions await annotation clarification and plan approval.
- **Result verdict:** Awaiting user response.

### Review 002 — 2026-11-11

- **Reviewed:** R001 Biona Rice Cakes desktop case study, eight sectional annotated screenshots `../image(20261111-210937).png` through `../image(20261111-211031).png`.
- **Exact annotations normalized:** title scale/line wraps; cross-project consistency; chapter copy alignment; small blue tag size; two overlapping competitor headings; sketch-development heading rewrite; delete route count suffixes; developing-route alignment; approved 3-image chosen-route group; rename Shelf impact and New product release; constrain Meet the new look to two lines; remove small Reflection tag and the next-project Machandel block. Requested max width 1280px.
- **Explicit GOOD:** The three large Developing chosen Route 3 images remain locked (IMG-ROUTE-01); previously approved responsive shell behaviour retained (SHELL-01).
- **Unannotated:** Remain unchanged, not implicitly approved. The original Rice Cakes paragraphs are preserved without shortening.
- **Clarification:** HERO-01 exact number of headline lines; wording says four twice but requests reducing the four-line heading, tentatively interpret two.
- **Proposal:** Items LAY-01, TYPE-01, HERO-01, ALIGN-01, LABEL-01, HEAD-01..06, ROUTE-01, CLEAN-01..02, described above.
- **Authorization:** Pending user approval. No website code modified. No new rendered website preview yet.


### Review 003 — 2026-11-11 (implementation handoff)

- **Reviewed source/baseline:** R001 Biona case study inside `delia-logigan-portfolio-max-1270px.zip`.
- **Authorization:** User explicitly approved all 15 proposed Biona review revisions and a **two-line H1**, and requested implementation with desktop previews.
- **Produced:** R003, the files `biona-rice-cakes.html`, `biona-case.css`, `styles.css` in the updated website bundle.
- **Implemented:** max content width 1280px across the website; consistent Biona title/H2/paragraph/blue-label tokens; two-line H1; corrected column gutter and aligned copy; smaller long H2s; `Initial sketches` heading; route counter suffixes deleted; `Shelf impact` heading; `New product release` heading; `Meet the new look` two-line heading; Reflection micro-label removed; Machandel next-case navigation removed.
- **Copy preservation check:** 16 of 16 original substantive case-study paragraphs are byte-for-byte text-identical after HTML text extraction; no paragraphs were shortened. All 17 image source paths unchanged.
- **Locked asset integrity:** Original chosen-route artwork images `09a`, `09b`, `09c` are byte-identical to the R001 package and retain the same full-width vertical order, sizing CSS, and uncropped display.
- **Desktop checks:** Inline Chromium render at 1920px and 1440px; H1 measured at 2 lines; all 17 images loaded; no JavaScript page errors or horizontal overflow. Additional regression checks at 1024px and 390px passed for loaded visuals and overflow, but mobile layout is not submitted for design approval.
- **Clean desktop previews:** `review-previews/R003-desktop-hero.png`, `R003-moodboard.png`, `R003-chosen.png`, `R003-extension.png`, `R003-reflection.png` and other sectional captures.
- **Locked/unchanged:** centred gutters, approved Route 3 artwork; original wording and image order. Unannotated areas left unchanged and not treated as approved.
- **Deviation/technical exception:** None to the locked Route 3 artwork. Shared shell width changes only from the explicit approval.
- **Result verdict:** **Awaiting the user's visual review**, not automatically accepted or promoted to the master standard for other case studies yet.


### Review 004 — 2026-11-11 (asset replacement and heading spacing)

- **Source:** R003 site and 15 high-resolution uploaded JPEG artboards (`Artboard ... @3x/@2x`).
- **User instructions:** replace matching low-resolution Biona images with new high-quality exports; improve kerning in large black titles across portfolio; crop photography only when necessary and keep subjects visible; do not crop design routes, shelf line-up, technical artwork, or the final advertisement; identify any missing assets.
- **Authorised implementation:** R004, `biona-rice-cakes.html`, new `.webp` assets, site-wide headline tracking corrections in `styles.css` and `project.css`, and Biona-specific tracking adjustments in `biona-case.css`. Homepage Biona cover updated from high-resolution hero.
- **Explicit image preservation:** three chosen-route artworks retain their vertical full-width order (previous green GOOD lock). Shelf line-up now uses separate full-size before/after images without cropping.
- **Missing new originals:** old six-pack rice cake range and hand-drawn route sketch sheet; retain the existing lower-resolution images and flag to user.
- **Text scope:** no changes to original paragraphs, labels or titles. Two-line main title, font sizes, 1280px responsive centred container and surrounding visual structure preserved.
- **User acceptance:** pending visual review of R004; do not apply this as a newly accepted master to the other seven projects yet.

- **R004 verification:** The original Biona section copy was compared against R003: all 29 paragraph text nodes match exactly. Browser renders at 1920, 1440, 1024 and 390px showed 17 image elements loaded, zero horizontal overflow and a two-line Biona H1; no page JavaScript errors. The home page and one generic case-study page were also checked at desktop and mobile sizes after the heading kerning changes. The home hero font cap was reduced slightly (from 104px to 94px) solely to prevent collision with the right intro after loosening tracking.
- **Shelf ordering correction:** visual inspection revealed the initially mapped shelf source files were reversed; final R004 explicitly displays original Biona before, redesigned after. Both are full-width uncropped.
- **Campaign artwork:** separately re-rendered after a first far-down-page capture showed an unpainted image; final browser capture confirms the 2048×1279 artwork is complete and uncropped.

## Current Machandel review state — Review 006 proposal (2026-11-11)

- **Reviewed artifact:** R005 `machandel.html`, desktop screenshots of the hero, introduction, project overview, previous/current packaging, mood board, colour system, packaging anatomy, final product photography, and trade-show application.
- **Feedback source:** `../image(20261111-230713).png`, `../image(20261111-230726).png`, `../image(20261111-230735).png`, `../image(20261111-230759).png`, `../image(20261111-230806).png`, plus supplied desired hero `../mach2.png`.
- **Workflow state:** Revision plan proposed; **not authorised or implemented**. Page source and assets remain R005.
- **Previously protected:** shared centred 1280px shell, Biona approved Route 3 image presentation, Biona source/artwork; maintain shared heading/body system and left-title/right-copy framing.
- **GREEN in Machandel markup:** preserve the project overview/brief body copy and three overview cards; Previous and Current heading/copy structures; Colour system heading/copy and three colour boards; Packaging anatomy heading/copy and its artwork; World application main heading/copy (but the adjacent blue eyebrow is marked repetitive). Green indicates approval of the specifically outlined visible regions only, not entire page or other breakpoints.
- **Proposals awaiting approval:** `MC-01` replace Machandel hero with supplied `mach2.png`; `MC-02` make The brief. one line; `MC-03` slightly reduce Previous/Current visual display scale to avoid upscaling/blurriness; `MC-04` make Mood board. one line; `MC-05` expand the mood-board explanatory text; `MC-06` add the approved-style text into the navy speech-bubble graphic while preserving the transparent PNG; `MC-07` replace jargon-like 05 / RANGE ARCHITECTURE micro-label with simpler 05 / COLOUR PALETTES; `MC-08` move the current blue three-jar hero photo below Packaging anatomy, above The packs in context, without duplication; `MC-09` remove repetitive 08 / REAL-WORLD APPLICATION eyebrow; `MC-10` crop only the three trade-show photographs into equal-height aligned tiles, keeping jars, counter branding and shelves visible; `MC-11` losslessly optimise the new hero PNG where beneficial and preserve format and content.
- **No edits yet:** User to approve all or selected proposal IDs before implementation. Any new copy or exact micro-label wording remains proposed, not accepted.

## R005 — Machandel first complete case-study draft (2026-11-11)

### Scope
- Build a new Machandel case-study page using the Biona R004 typographic and 1280px layout system.
- Use uploaded Machandel PNG and JPEG source files as-is; keep PNG files as PNG and do not crop artwork.
- Preserve user-provided original source language for the introduction, prior/current range and world application. Add only short navigation/context copy where needed.

### Preserved/locked from prior reviews
- Biona Rice Cakes R004 HTML and CSS unchanged.
- 1280px responsive page container; shared typography scale; left-heading/right-copy chapter layout; restrained cobalt accents.
- No next-project block added to the new page.

### Pending user review (NOT automatically GOOD)
- Two-line “Machandel Case Study.” title and use of the new blue photograph as the temporary hero.
- Presentation of project overview cards, previous/current pack graphics, colour boards, product photograph, and three exhibition photos.
- Draft explanatory paragraph on the colour-system section.
- Missing standalone high-resolution originals: previous navy collage hero and typography specimen graphic.

### Build status
- New `machandel.html` and `machandel-case.css`; homepage and direct project routing to this new page.
- 13 content images verified against upload hashes; all rendered.
- Layout checked at 1920, 1440, 1024, 768 and 390. No horizontal overflow or page errors in tested inline render.
- Waiting for user GOOD/NEEDS IMPROVEMENT/BAD annotations and approval before considering Machandel final.

## Review 006 — 2026-11-11 (Machandel annotated revision plan; not implemented)

- **Reviewed version:** Machandel R005 desktop site, five red/green annotated screen crops, plus `mach2.png` as the proposed replacement hero.
- **User feedback:** Hero replacement using branded jar-collage PNG; one-line The brief and Mood board headings; slightly smaller older/newer packaging images to avoid blur; richer mood-board paragraph and words inside navy speech bubble matching the supplied reference; simpler wording than “range architecture”; move current blue-background jars photo beneath Packaging anatomy; remove redundant real-world application eyebrow; crop three exhibition photos to align flush; optimise overly large image bytes while keeping PNGs as PNGs.
- **Explicit green approvals interpreted narrowly:** body copy and visual presentation of Project overview cards, Previous/Current chapter heading-copy layouts (not their red-marked image scale), Colour system chapter and artwork (not the red-marked eyebrow label), Packaging anatomy chapter and graphic, and World application chapter heading/copy (not repetitive micro-label or exhibition photo cropping).
- **Preserve without a new lock:** all unannotated page elements, full-width unclipped packaging artworks, Biona case study, responsive 1280px shell, typography baseline and original source copy except the explicitly requested mood-board expansion.
- **Specific plan:** MC-01 through MC-11 as listed in current state. No automatic implementation. Need user approval of entire plan or selected IDs.
- **Technical implications disclosed:** placing the three-jar hero lower moves a previously shown photograph rather than duplicating it; exhibition-photo crops only affect photographs; PNG optimisation must keep PNG extension, transparency and visible pixels intact. Improved display scale cannot restore resolution absent higher-resolution source files.
- **Implementation:** None. HTML/CSS/images unchanged; only this portable review log updated.
- **Result verdict:** Awaiting user approval of plan before preparing R006 site previews.


## Review 006 — 2026-11-11 (implemented; awaiting visual verdict)

- **Source:** R005 Machandel, five annotated screenshots (`image(20261111-230713).png` through `image(20261111-230806).png`), and the new user-supplied `mach2.png`.
- **Approval:** User explicitly approved all eleven proposed Machandel changes (“awesome, go ahead!”). Only those changes were implemented.
- **Implemented:** MC-01 through MC-11, as detailed in README. The previous blue-beans hero was moved rather than duplicated; `mach2.png` is the new hero. The Mood Board copy expanded and its small navy bubble includes the reference text as an HTML overlay. “The brief” and “Mood board” fit on one line. Previous/Current art displays smaller at up to 1020px, uncropped. Colour system eyebrow simplified; the redundant world-application eyebrow removed. Exhibition photos have same-height CSS crops with the products and Machandel counter lettering visible.
- **Protected:** The green-marked overview cards, Previous/Current heading and copy structure, three colour boards, packaging anatomy panel, the world application heading and copy, Biona R004, approved 1280px container and type tokens.
- **Asset handling:** PNG source pixels preserved exactly through lossless PNG compression, including alpha/transparency. `mach2.png` 4,542,054 → 3,874,859 bytes. Original JPEG photographs never recompressed; cropping is visual CSS only. Original Biona and shared CSS files byte-identical to R005.
- **Verification:** Inline Chromium at 1920, 1440, 1024, 768 and 390px: 14/14 Machandel images loaded, one-line brief/mood headings and two-line H1 at all widths, no horizontal overflow or JS errors.
- **Screenshots:** `review-previews/R006-intro-desktop.png`, `R006-section-04.png` (mood), `R006-section-06.png` (anatomy and relocated photo), `R006-section-08.png` (equal-height application photos), `R006-full-page.png`.
- **Status:** R006 supplied for user review; no newly unannotated elements marked GOOD by assumption.


## R007 — Machandel speech-bubble caption (12 November 2026)
- **User-requested/approved change:** Keep the full mood-board design and text; move the caption slightly lower inside the navy speech bubble and decrease its weight.
- **Implementation:** `machandel-case.css` only — `.mc-mood-bubble-text` `top` changed `25%` → `28.5%`, `font-weight` `700` → `400`. No edits to image files, markup, copy, Biona, navigation or shared design tokens.
- **Checks:** Captured a new rendered desktop mood-board preview at 1440px. Awaiting user review/acceptance of R007.


## R008 — Mood Board caption hyphen removal (12 November 2026)
- **User-requested change:** Remove the hyphen in the speech-bubble caption (`veg-inspired` → `veg inspired`).
- **Implementation:** One text substitution in `machandel.html`; all other page markup, styles, assets, layouts, and Biona case study left unchanged.
- **Status:** Updated build for visual review.


## R009 — Bonsan initial case study, pending visual review (12 Nov 2026)
- User requests same approved Biona/Machandel principles: 1280px centred responsive shell, large visuals, no overlapping headings or redundant blue mini-labels, original portfolio copy and artwork, original PNG transparency, optimise only when beneficial.
- Assets supplied: seven original images, covering previous packaging, A–D Worcester/Chilli routes and bottle mockups, a final duo photograph and paired hero. PNG assets remain PNG and have verified pixel-identical optimisation where smaller. JPG originals remain unchanged except 1.8%-right-only derivatives for two four-bottle comparisons.
- Build: `bonsan-sauces.html`, `bonsan-case.css`, portfolio home routing, and user-supplied cover thumbnail. Other project pages untouched.
- Bonsan body text retained from original portfolio screenshots. Final section has a short, outcome-oriented statement summarising the supplied context, without implying measured performance.
- Awaiting user review and approval (not locked).

- **Browser checks:** at viewport widths 1920, 1440, 1024, 768 and 390, 7/7 Bonsan images decode, no horizontal overflow, no H1/body-copy collision or chapter heading/copy overlap and no page JS errors. Full-page and four section screenshots captured at desktop 1440.
- **Editorial refinement:** differentiated the two blue exploration eyebrows (02 / FLAVOUR HIERARCHY and 03 / COLOUR & MOVEMENT), avoiding repetitive miniature labels while preserving chapter structure.


## R012 — Print & Digital Ad Hocs initial draft
- Created `print-digital-ad-hocs.html` from the Biona/R004 master case-study typography and 1280px shell.
- Source/reference: old portfolio screenshots and new user-uploaded 9 JPEG assets.
- Original intro copy preserved. Print photos, catalogue composites, Ocado banners and additional-brand work shown in original order.
- Three Instagram post templates remain empty; future video overlays supported via CSS.
- Preview draft only. Newly created sections are not locked until explicitly approved by user.


## R013 — Ad Hocs annotated review draft (12 Nov 2026)
- Source: R012; annotated images `image(20261112-221922).png`, `image(20261112-222406).png`, `image(20261112-222823).png`.
- Intro: balanced catalogue photos by changing the two-column width ratio to the original photo aspect ratios; no photo crop or source edits.
- Print gallery: exact supplied `carousel(1).jpg` replaces earlier low-resolution composite.
- Instagram: generated transparent-background PNG copies from the three original JPG mockups, maintaining the white posts, their captions, and soft shadows; video placeholders left empty and same overlay coordinates preserved.
- Additional brands: source `newcarousel.jpg` used (exact full-resolution original retained) and split into two complete, labelled galleries at the blank inter-section boundary, with no ads cut. The composites display at or below their native 834px width to prevent upscaling blur.
- All Biona/Machandel/Bonsan pages and shared typography unchanged. These changes await visual GOOD/NEEDS IMPROVEMENT/BAD review.


## R014 — Instagram right-edge cleanup (12 Nov 2026)
- User screenshot identifies a faint disconnected off-white/grey shadow strip on the right edge of each Instagram frame.
- Regenerated the translucent shadow outside each rounded white card with one smooth, consistent soft falloff, eliminating the separated grey/off-white rim on the right.
- The original JPEG card artwork remains pixel-identical inside the opaque rounded card region; captions, empty media areas, layout and all other projects are untouched.
- The three Instagram frame PNG images remain RGBA PNG with transparent backgrounds and understated drop shadows.
- Awaiting visual approval.


## R016 — Instagram card symmetry (12 November 2026)
- **Reviewed source/version:** Print & Digital Ad Hocs R014, desktop Instagram cards, as annotated in `image(20261112-230117).png`.
- **Verdict:** NEEDS IMPROVEMENT on the asymmetric inner left/right white margin in all three frames; rest of the page preserved.
- **Approval gate:** User approved the detailed plan ("perfect") to retain visible white borders and equalise them on the left and right, keeping the white card, captions, videos placeholders and soft shadows intact.
- **Implementation:** Shifted only inner post contents 16 original pixels left within three RGBA PNGs. The rounded outer card and alpha shadow remain byte-identical outside the edited interior regions. Video/GIF overlay `left` offset updated from 17.7% to 16.47% as a necessary technical dependency.
- **Preserved:** Other case studies, all unannotated content, card scale/spacing/shadows, 1280px shell, original user assets and blank media areas.
- **Status:** Implemented as R016; awaiting user's explicit visual approval, not automatically GOOD.
- **Review evidence:** `review-previews/R016-instagram-frames.png` and `review-previews/R016-full-page.png` supplied separately; source review log included in website folder.


### R017 — Social-card motion integration
- Swapped the three grey placeholders for the user-provided looping GIF and MP4 clips without changing the cards, dimensions, shadows or earlier layouts.
- Corrected media geometry to actual supplied PNG grey aperture (232,232–1103,1103).
- Updated only the social section description to reflect the now-live motion content.


## R019 — Instagram media edge clean-up

Expanded the GIF and MP4 overlays over the grey media apertures by a few source-image pixels on each side, eliminating thin grey seams at the top/right without changing the supplied Instagram frames, card spacing, captions or shadows.


## R021 — Catalogue photography stack and case-study navigation removal (13 November 2026)
- Approved directly by user from an annotated catalogue page screenshot.
- Changed just the catalogue application images from a side-by-side grid to a single-column vertical stack, centred inside the established 1280px responsive site container; images remain uncropped.
- Removed the bottom “Next case study / Print & digital ad hocs” panel from the catalogue page only.
- Retained the global footer, existing typography, existing image files, flipbook, and every other project page unchanged.

## R025 — Sprout revisions (approved)
- User approved test of a gently looping horizontal Instagram scroll; original `instagram-artwork.png` stays byte-identical and a pixel-exact crop is animated separately. Instagram mockup remains still, and accessibility reduced-motion setting disables animation.
- Sprout brochure images increased within existing 1280px shell using project-scoped CSS zoom; two-column gaps tightened. No cropping or recompression of the supplied source PNGs.
- Foundation graphic boards receive small 4.5% project-scoped visual zoom to align with section edges.
- Sprout section heading line-height increased slightly for letter clearance; font sizes unchanged.
- Motion preview video poster now uses the supplied original video's final Sprout title frame.
- Removed the next-project / Bird & Blend block; shared portfolio pages remain unchanged.
- Desktop and mobile structural checks: no horizontal overflow at 1440, 1024, 768, 390px. Browser preview rendered through local in-memory asset route because network/file navigation is restricted in the test environment; deployment itself remains plain offline-compatible GitHub Pages HTML.


## R027 — 2026-11-13 (full image bounds + video playback)

- **User correction:** Do not crop the Sprout brand identity boards. Their graphic content needs to reach the same horizontal boundaries as the chapter headings. Preserve source imagery exactly; use full 1280px page width. Also remove unwanted cropping in the four-picture print collateral grid.
- **Fixed:** Removed all Sprout identity-board and print collateral `transform:scale` crops. Identity boards are rendered whole, extended symmetrically only into their own built-in *blank* margins to bring the designed content flush to the shared text column. No image file pixels were removed; source assets are unchanged. Print collage uses the full-width two-column grid with 12px uniform gaps and natural, uncropped image proportions. Lifestyle photos also use `contain` rather than `cover` for no cropping.
- **Video:** Re-encoded supplied `SproutFinalVideo.mp4` into H.264 Constrained Baseline 30fps, compatible MP4 with faststart; added WebM fallback and autoplay/muted/loop/playsinline plus native controls. A cache-busting source query helps visitors load the replacement rather than the cached old file. Source duration and content retained.
- **Verification:** Confirmed all supplied Sprout PNG files except the regenerated video unchanged; ffmpeg decodes the replacement video without errors. Headless browser navigation was blocked by the current execution environment, so live browser visual/video playback was not verified here; browser review by user remains pending.


### R028 — Artwork width and trifold spacing
**Observed:** The previous Sprout page retained the browser's default `figure` margins (40px per side), causing all imagery to appear too narrow relative to the heading margins, and causing a needlessly large gap between the four brochure mockups.
**Fix:** Sprout-scoped `figure.bc-media { margin: 0; width: 100%; min-width: 0; }`, 2 equal brochure columns with 12px row/column gap, identity boards reset from oversize to natural `width:100%` without cropping.
**Preserved:** Source images, original formats, ordering, static carousel, video files, all non-Sprout projects.


## R032 — Homepage thumbnail, typography and contact refinements (13 Nov 2026)
- Replaced all eight thumbnail previews with newly optimised high-resolution WebPs derived from the case-study source artwork (without changing the original case-study images).
- Reduced and responsively bounded the main headline to prevent its second line colliding with the right-hand description.
- Updated eight rollover headings and descriptions to the longer case-study wording shown in the user’s reference screenshot, maintaining readable hover/focus treatment.
- Matched the contact title to the new headline size and placed the contact description directly underneath rather than in the neighbouring column.
- Added a labelled three-field contact form (name, email, message) that posts to FormSubmit for hello@delialogigan.graphics, including bot honeypot, plus a direct clickable email alternative. The owner must activate FormSubmit once via confirmation email on first submission; actual delivery cannot be verified locally.
- Preserved the 1280px page shell and all eight case study pages/assets/links.
- Kept grid in user-reference order: Rice Cakes, Machandel, Bonsan, Print & Digital, Windmill Catalogue, Waitrose, Sprout, Bird & Blend.


### R033 — Homepage copy and filter adjustments (13 November 2026)
- Removed the em dash from the homepage introduction, using a comma for natural sentence flow.
- Removed **Campaign** from Print & Digital Ad Hocs. It remains in Catalogues & Collateral.
- Removed **FMCG** from Biona x Waitrose Tasting Day. It remains in POSM and Campaign.
- No layout, image, case-study, or form changes.


### R034 — Contact section simplified (13 November 2026)
- Removed the FormSubmit contact form, its three fields, hidden inputs, submit button and delivery note.
- Added a prominent direct email link to `hello@delialogigan.graphics` under the existing contact heading and description, using the portfolio's blue accent and responsive typography.
- Removed the JavaScript action setter for FormSubmit; content.js remains the single source of truth for the email address.
- No project pages, portfolio thumbnail assets, filters, or layout elsewhere were changed.


### R035 — Contact email single-line refinement (13 November 2026)
- Prevented the email address breaking inside `.graphics`, with mobile-responsive type sizing so the link and arrow fit smaller screens. No other visual changes.


## R036 · About Me — approved draft implementation
- Added dedicated About Me HTML/CSS page with no personal portrait, keeping the original approved wording.
- Hero quote at display size, editorial body and separate personal paragraph, aligned to the original site typography, 1280px shell and cobalt accent.
- Updated 10 existing navigation menu ABOUT destinations; project content remains unchanged.


### R037 · About heading refinement (16 November 2026)
- Removed the decorative star glyphs and blue Georgia serif title on the About page.
- Replaced with a black, bold Arial “About me.” heading aligned to the same 880px readable column and sized consistently with the homepage display typography.
- Preserved every paragraph, introductory statement, navigation link, project page, image, video and catalogue flipbook unchanged.
