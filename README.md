# FLOXOV — Premium Personal Website

A responsive, bilingual personal website built with vanilla HTML, CSS, and JavaScript. The current experience is intentionally focused on three elements: the Home / Hero section, Contact section, and a minimal footer.

## Run locally

No build step or package installation is required.

1. Extract the project folder.
2. For reliable testing, start a local HTTP server from this folder (do not use the iPhone Files HTML preview, which may block sibling CSS/JS/assets):

   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` on the computer. To test on iPhone, publish the folder to an HTTPS host such as Netlify, or access the computer server through its local network IP while both devices are on the same Wi-Fi.

## Structure

- `index.html` — Home / Hero, Contact, and Footer.
- `about.html` — legacy URL that redirects to `index.html#contact`.
- `projects.html` — compatibility redirect to the homepage; Projects is intentionally absent from navigation.
- `assets/styles.css` — design system, dark/light themes, responsive layouts, and motion.
- `assets/main.js` — language/theme controls, navigation, profile image setup, contact rendering, and progressive enhancements.
- `assets/config.js` — editable profile image configuration and contact channels.
- `assets/profile.jpg` — neutral graphite placeholder image; replace it with the owner's photograph.
- `assets/favicon.png` — browser icon.
- `assets/og-image.png` and `assets/og-image.svg` — social-sharing artwork.

## Replace the profile photograph

The profile image is configured in `assets/config.js`:

```js
profile: {
  name: "FLOXOV",
  image: "assets/profile.jpg",
  imagePosition: "50% 50%"
},
```

The easiest method is to replace `assets/profile.jpg` with the real photograph while keeping the same filename. No HTML or JavaScript changes are needed.

To use a different filename, update `profile.image`. Adjust the crop with `imagePosition`, for example `"50% 35%"`. The image uses `object-fit: cover`.

## Contact configuration

The Telegram and Discord channel entries are in `assets/config.js`. Both currently use the username `Floxov`.

Each contact card is a semantic button that copies its configured username to the clipboard. A localized toast confirms success or reports a copy failure. No profile URLs or account identifiers are fabricated.

## Languages

The site supports English and Russian. All visible interface copy, contact-card accessibility labels, and clipboard feedback are localized in the `en` and `ru` dictionaries in `assets/main.js`. The selected language is stored in localStorage, and the document language and SEO metadata update with it.

## Themes

Dark and light themes use CSS variables in `assets/styles.css`. The first visit follows the operating-system preference; a manual choice is saved in localStorage.

## Before publishing

- Replace `assets/profile.jpg` with the actual personal photograph.
- Verify that all displayed contact identifiers are correct.
- Set the production domain and canonical metadata when the final domain is known.
- The website is static and does not include a backend contact form.

## Accessibility and performance

- Semantic landmarks and heading hierarchy.
- Keyboard-accessible navigation and visible focus states.
- Responsive mobile navigation and copy-to-clipboard contact controls.
- `prefers-reduced-motion` support.
- Image fallback styling if the profile photograph is unavailable.
- Lightweight CSS transforms and progressive reveal animations.


## Customize the header logo, profile avatar, and contact video

All three visual assets are configured in `assets/config.js`. Upload your files into the `assets/` folder and change only the paths in this configuration.

### Header logo

```js
brand: {
  logoImage: "assets/my-logo.svg", // SVG, PNG, JPG, or WebP
  logoAlt: "FLOXOV logo",
  logoSize: 34,
  showName: true // false if the uploaded logo already includes the FLOXOV wordmark
},
```

Leave `logoImage: ""` to use the original diamond-shaped F mark. The uploaded image replaces that mark; it does not change the rest of the navigation.

### Square profile avatar

```js
profile: {
  name: "FLOXOV",
  image: "assets/my-avatar.webp",
  imagePosition: "50% 50%",
  imageFit: "cover",
  aspectRatio: "1 / 1"
},
```

Use `imagePosition` to adjust the crop. Keep `aspectRatio: "1 / 1"` for a square image, or use `"4 / 5"` for a portrait frame. `imageFit: "cover"` fills the frame; `"contain"` shows the entire image.

### Animated contact-section background

```js
contact: {
  backgroundVideo: "./assets/background.mp4",
  backgroundPoster: "assets/contact-poster.jpg",
  videoOverlayDark: 0.66,
  videoOverlayLight: 0.78,
  // Keep your existing email and channels configuration below.
},
```

Use an optimized MP4 encoded with H.264 or a WebM file. Keep the video muted and without audio; the player is configured for autoplay, loop, and inline playback on mobile. Add a poster image so the contact section still looks intentional while the video loads or when autoplay is blocked. If both paths are empty, the original graphite gradient is used. Browsers may block autoplay or defer it when reduced motion or data-saving is enabled; the poster image remains visible. The overlay opacity can be set from `0` (video clearly visible) to `1` (fully covered for maximum text contrast). For mobile, aim for a short 6–12 second loop, 720p or 1080p, H.264, and a modest bitrate to avoid excessive data usage.


## Customize the hero cover and header logo

Both assets are configured in `assets/config.js`.

### Main hero cover

Change only `heroMedia.source` to use a new image or video:

```js
heroMedia: {
  source: "assets/background.mp4",       // JPG, JPEG, PNG, WebP, MP4, or WebM
  poster: "assets/hero-poster.webp",     // Video fallback; optional for images
  position: "50% 50%",
  fit: "cover",
  aspectRatio: "1 / 1"
},
```

For a still image, set `source` to a local image path such as `assets/my-cover.webp`. For an animated cover, set it to an MP4 or WebM path. Video is muted, looped, and played inline on mobile. The poster/profile image and graphite visual fallback remain available if video playback is blocked or the asset cannot load. Keep the original `profile.image` setting as the still-image fallback.

### Header logo

The header uses the existing FLOXOV favicon artwork, optimized as `assets/brand-logo.webp`. Replace `brand.logoImage` with your own local asset path:

```js
brand: {
  logoImage: "assets/brand-logo.webp", // Example: "assets/my-logo.svg"
  logoAlt: "FLOXOV brand mark",
  logoSize: 34,
  showName: true
},
```

Supported logo formats include SVG, PNG, JPG, and WebP. If the logo path is empty or the file cannot load, the geometric F mark is not displayed; the FLOXOV wordmark remains visible.

The theme selector uses a Sun/Moon segmented pill. The EN/RU selector uses a matching segmented control. Both preserve their existing localStorage keys (`floxov-theme` and `floxov-language`).
