## R037 — About Me heading refinement
The About Me page now uses the same bold black Arial display typography as the rest of the portfolio. Decorative stars and the oversized blue serif display are removed. All text, media, project pages and navigation remain unchanged. Open `index.html` to view the full portfolio, or `about.html` to view the revised About page.

## R035 — Contact email wrap corrected

The direct email link now uses a non-wrapping address, with slightly smaller responsive type on narrow mobile screens. This prevents the final `s` in `.graphics` wrapping onto a separate line, while keeping the link clickable and its arrow inline. All other layout, files and projects are unchanged.

## R034 homepage — direct email contact

The `index.html` homepage now uses high-resolution case-study thumbnails stored in `assets/home-thumbnails/`, refreshed hover copy, a smaller responsive hero heading and a full-width contact section. The 1280px layout and all existing project pages are preserved.

**Contact details (R034):** The contact form has been removed entirely. The homepage displays a prominent `mailto:hello@delialogigan.graphics` link below the existing "Contact me." heading and short introduction. There are no form fields, third-party submission services or spam-protection scripts to configure. Clicking the address opens the visitor’s default email application. All portfolio case studies, images and approved layout remain unchanged.

# Delia Portfolio — Machandel R008

R008 supersedes R007. The only website change is removing the hyphen from the Machandel Mood Board speech-bubble caption: “veg-inspired” → “veg inspired”. The original wording otherwise remains intact, and the previously approved 400-weight typography and lower text position are preserved.

See `review-log.md` for the change history. GitHub Pages deployment and all project pages remain included.


## Bonsan R009
New `bonsan-sauces.html` case study uses the same 1280px site shell, case-study typography, and section alignment as Biona and Machandel. Actual source artwork stays intact (PNG remains PNG). The two four-bottle JPGs are derivatives trimmed by only 1.8% on the right, centred on the site. Their originals remain in the user uploads. Main photo and all artwork show in full.


## Print & Digital Ad Hocs — R012
- New project page: `print-digital-ad-hocs.html`; shared 1280px shell and master-case typography.
- Portfolio home thumbnail `biona-collateral` links to this page. To change its title, category, thumbnail or preview description edit `content.js`.
- All new artwork is in `assets/case-ad-hocs/`; original JPEGs are preserved except that `04-catalogue-promotional-print.jpg` is a chapter extraction made at the clear green/tan border (y=1179). Original full composite is also retained.
- Instagram frame images intentionally contain empty grey media areas. To play your supplied MP4s, put videos in `assets/case-ad-hocs/videos/`, add a `<video class="ah-insta-video" autoplay muted loop playsinline preload="metadata">...` inside each `.ah-instagram-frame`, after the frame `<img>`. GIFs can be used with `<img class="ah-insta-gif">`. The CSS overlay positions are defined in `ad-hocs-case.css`.
- No background video or audio playback is supplied in R012.

## Print & Digital Ad Hocs — R013 (annotated review)
- The two Suma catalogue photos now align top and bottom in a natural-aspect-ratio grid, without cropping either photograph.
- The full Biona print campaign was replaced by the exact supplied high-resolution `carousel(1).jpg`, saved as `assets/case-ad-hocs/04-catalogue-promotional-print.jpg` without recompression.
- Instagram frame backdrops were separated into transparent PNGs while keeping the original frame cards, UI and soft shadows. The supplied JPG originals are retained alongside the PNGs. The media areas stay empty until videos are supplied. To insert a video, add the `<video class="ah-insta-video" autoplay muted loop playsinline preload="metadata"><source src="assets/case-ad-hocs/videos/video-01.mp4" type="video/mp4"></video>` after each frame's `<img>` in `print-digital-ad-hocs.html`. GIFs use `<img class="ah-insta-gif">` at the same position. The overlay geometry stays aligned with the grey rectangle.
- The exact user-supplied `newcarousel.jpg` is retained as `07-additional-brands-campaigns.jpg`, with two visual-only crops at its blank separation margin for print and Ocado, introduced by clear section captions. It is deliberately not upscaled past its native 834px width, avoiding unnecessary blur.
- All earlier case-study pages and shared styles remain byte-identical to R012. This revision is a draft for visual review, not locked.

The downloadable ZIP intentionally excludes `review-previews/` (screenshots), keeping the deployable GitHub Pages source lean. Desktop review previews are provided separately in this chat.


## Print & Digital Ad Hocs — R014 (Instagram rim cleanup)

- The faint off-white double edge on the right of each Instagram card has been removed.
- White cards, UI, captions and grey video placeholders are preserved, with a smooth, consistent transparent drop shadow.
- The three Instagram frames are still RGBA PNGs; future video overlays use the existing `ah-insta-video` styling.
- All four existing portfolio case studies and shared site structure are unchanged.


## Print & Digital Ad Hocs — R016 (balanced Instagram post insets)
- The three Instagram mockups now have almost exactly equal visible left and right white space between the gray content area and the outer white card, rather than being crowded on the right.
- The existing rounded white card silhouettes and soft shadows are unchanged; the post content has shifted left 16 original-image pixels within each PNG.
- For future videos and GIFs, `.ah-insta-video` / `.ah-insta-gif` are aligned to the shifted grey media areas (`left:16.47%`).
- All remaining site files and project case studies are unchanged.


## Print & Digital Ad Hocs — R017 (looping Instagram motion)
- Three exact supplied motion assets integrated in the existing social cards, in order: supplied GIF, Biona Rewards MP4, and third Biona MP4. The source motion files are copied byte-for-byte, not recreated or recompressed.
- The square media overlays align to the measured 872×872 grey apertures in the original 1300×1672 card PNGs (x=232, y=232) without covering profile UI, card edges or captions.
- GIF loops infinitely; MP4s autoplay muted, loop, and play inline, with poster previews while buffering. All portfolio pages, images and earlier approved layouts are preserved.


## Windmill Organics Catalogue — R020
- Added `windmill-catalogue.html`, sharing the approved 1280px site shell, title/copy scale and blue kicker styles. Home catalogue thumbnail routes to the new page. Other case study HTML/CSS and media remain unchanged.
- An offline-ready 92-page flipbook is rendered directly from the uploaded 47-PDF-page catalogue (portrait cover + 45 double-page PDF spreads + portrait back cover). Each page stays in the exact original order; the PDF is preserved in `assets/case-windmill-catalogue/` and available via `OPEN ORIGINAL PDF`.
- Controls: turn forward/back, keyboard arrows, swipe, slider, full screen and click-to-enlarge pages. JavaScript and page images are bundled locally; no CDNs, JavaScript frameworks or network requests.
- Two catalogue application photographs are tightly cropped from the supplied portfolio screenshots because standalone photographic source files were not provided with this turn. For future high-resolution replacement, swap the two JPG files in `assets/case-windmill-catalogue/`.


## Biona x Waitrose Tasting Day — R023
- New GitHub Pages page: `biona-waitrose-tasting-day.html` linked from the existing Biona event thumbnail.
- Preserves the approved shared 1280px shell, Arial case-study heading/body sizes, blue section labels, image-first presentation, and footer.
- Five original user-supplied JPEG images copied **without recompression, regeneration or cropping**, in order: `IMG_6881.jpg` (event day), `Waitrose Tasting Day HQ Poster A4 & card.jpg` (poster artwork), `poster_hanging_on_glass_wall.jpg` (installed poster), `cards.jpg` (discount cards), `IMG_6870.jpg` (tasting cards). Images were renamed in `assets/case-waitrose/` for descriptive paths, but source bytes are identical. The annotated portfolio screenshots were used as layout references only.
- Page uses `waitrose-case.css` for minimal project-only layout. Other case-study pages were not edited.


## Latest update
- Added custom `sprout.html` case study with identity, packaging, print collateral, motion and Instagram artwork.


## Sprout R025 — approved review amendments
- Preserved every previous project and its media from Sprout R024. Only Sprout HTML/CSS and two derivative PNG assets changed.
- The original `instagram-artwork.png` is unchanged and still renders as a full-size static fallback. `instagram-artwork-strip.png` is a **pixel-identical crop** of that source (no graphic reconstruction) placed as a foreground strip. CSS scrolls the strip while the Instagram card beneath stays still. Pause on hover; reduced-motion preferences show a static frame. To disable scrolling entirely, remove the `animation` property on `.sp-instagram-track` in `sprout-case.css`.
- The poster for the existing `social-motion.mp4` was replaced by an exact video frame from its closing Sprout title screen.
- Brochure photographs now use the full 1280px case-study grid with smaller gutters and a modest visual zoom, keeping the complete brochure mockups in view and leaving source files unchanged. Foundation boards are zoomed slightly to align their visual edges better with the text.
- Slightly increased Sprout's large-heading line-height to prevent touching letters without changing the established font sizes.
- Removed the next project / Bird & Blend navigation block; the standard footer remains.


### Sprout R027 updates

The Sprout identity boards and print collateral are no longer cropped by CSS scaling. The identity artwork reaches the shared 1280px text boundaries without cutting away source pixels. The original PNGs remain unchanged. The Sprout video was replaced with a cross-browser, fast-start H.264 MP4 and WebM fallback and should play muted on a loop; controls are available for manual playback.


## Sprout layout alignment — R028 (13 November 2026)
- Reset the browser-default 40px margins on Sprout artwork figures. This allows the actual media frames to align with the same left/right text boundaries across the full 1280px content width.
- Trifold print collateral: true equal 2-column grid, 12px horizontal and vertical gaps (not 40px image margins).
- Identity, hero, packaging and social artwork: retain original files and complete aspect ratios. No cropping, no artificial upscale beyond the containing column.
- Sprout video remains muted, looping and controllable. All other pages remain unmodified.


### R031 — Bird & Blend Tea Co. case study

- Open `bird-blend.html` for the eighth (final) dedicated case-study page; homepage card now links there.
- Preserves the site's typography, 1280px editorial edge alignment, and consistent section rhythm.
- Uses the supplied phone composite, whole visual-system sheet, and three original vertical filter artworks in Blueberry & Peach / Mojitea / Strawberry Lemonade order.
- The supplied 10.24-second H.264 filter video plays in a native, muted, looping portrait player with controls; poster captured from the actual video.
- The old prototype corkboard photograph is deliberately omitted.
- Assets are bundled locally under `assets/case-bird-blend/`, so the page works on GitHub Pages without external dependencies.


## R033 update
Minor homepage text and category corrections only. See review-log.md.


## R036 · About Me page
- Added `about.html` and `about.css` using the approved About Me copy, with a prominent statement, design-process paragraphs and a separate personal closing paragraph.
- The ABOUT menu now opens the dedicated page from the homepage and all eight case studies; WORK and CONTACT continue linking to the homepage anchors.
- All previous project imagery, motion, PDFs, flipbook assets and case study content are preserved from R035.
- Site can be published to GitHub Pages from this folder; `index.html` remains its entry point.
