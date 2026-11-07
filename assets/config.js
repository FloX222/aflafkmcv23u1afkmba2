/* FLOXOV site configuration.
   Edit the asset paths in brand.logoImage and heroMedia.source to customize the header logo and hero cover.
   heroMedia.source accepts JPG, PNG, WebP, MP4, or WebM. For video, heroMedia.poster is used as a fallback.
   The original profile.image and all contact settings are preserved. */
window.FLOXOV_CONFIG = {
  // BRAND ASSETS -----------------------------------------------------------
  // Add your logo file to /assets and set its path below.
  // Leave logoImage empty to keep the original diamond-shaped F mark.
  brand: {
    logoImage: "assets/logo.png", // Replace with your own: "assets/logo.svg", "assets/logo.png", etc.
    logoAlt: "FLOXOV brand mark",
    logoSize: 34,                        // Desktop size in CSS pixels; mobile sizing is responsive
    showName: true                       // Set false if your custom logo already contains the FLOXOV wordmark
  },

  // HERO COVER -------------------------------------------------------------
  // Change only source to replace the main visual with an image or animated video.
  // Supported: JPG, JPEG, PNG, WebP, MP4, WebM. For video, keep it muted and add a poster fallback.
  heroMedia: {
    source: "assets/floxov.png",     // Main hero cover: image or video path
    poster: "assets/floxov.png",   // Still fallback for video loading/autoplay failures
    position: "50% 50%",
    fit: "cover",
    aspectRatio: "1 / 1"
  },

  // PROFILE AVATAR ---------------------------------------------------------
  // Replace this path with your own square photo (JPG, PNG, or WebP).
  profile: {
    name: "FLOXOV",
    image: "assets/floxov.png",   // Example: "assets/my-avatar.webp"
    imagePosition: "50% 50%",      // Adjust crop: "50% 35%", "center", etc.
    imageFit: "cover",             // "cover" fills the square; "contain" shows the full image
    aspectRatio: "1 / 1"            // Keep square, or use "4 / 5" for portrait
  },

  contact: {
    email: "",
    // Optional cinematic contact-section background video.
    // Leave backgroundVideo empty to keep the original graphite gradient.
    // Use an MP4 (H.264) or WebM file placed in /assets.
    backgroundVideo: "./assets/background.png", // Existing bundled MP4 background
    backgroundPoster: "",           // Optional still image shown before video playback
    videoOverlayDark: 0.66,          // Dark-theme overlay opacity: 0 (clear) to 1 (opaque)
    videoOverlayLight: 0.78,         // Light-theme overlay opacity: 0 (clear) to 1 (opaque)
    channels: [
      { platform: "Telegram", username: "Floxov" },
      { platform: "Discord", username: "Floxov" }
    ],
    socials: []
  },

  toolGroups: [
    {
      title: { en: "Web development", ru: "Веб-разработка" },
      tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"]
    },
    {
      title: { en: "Design & experience", ru: "Дизайн и пользовательский опыт" },
      tags: ["UI / UX", "Figma", { en: "Design systems", ru: "Дизайн-системы" }, { en: "Prototyping", ru: "Прототипирование" }]
    },
    {
      title: { en: "Motion & interaction", ru: "Анимация и взаимодействие" },
      tags: [{ en: "CSS motion", ru: "CSS-анимация" }, "Framer Motion", { en: "Micro-interactions", ru: "Микровзаимодействия" }]
    },
    {
      title: { en: "Creative technology", ru: "Творческие технологии" },
      tags: [{ en: "Creative coding", ru: "Креативное программирование" }, { en: "AI workflows", ru: "ИИ-процессы" }, { en: "Experimentation", ru: "Эксперименты" }]
    }
  ],

  projects: [
    {
      id: "digital-identity",
      visual: "identity",
      title: {
        en: "Digital identity concept",
        ru: "Концепция цифровой идентичности"
      },
      category: {
        en: "Design / Web",
        ru: "Дизайн / Веб"
      },
      description: {
        en: "A visual direction study for a modern personal brand and its digital presence.",
        ru: "Исследование визуального направления для современного личного бренда и его цифрового образа."
      },
      tags: [{ en: "Art direction", ru: "Арт-дирекшн" }, { en: "UI design", ru: "UI-дизайн" }, { en: "Web", ru: "Веб" }],
      url: ""
    },
    {
      id: "motion-experiments",
      visual: "motion",
      title: {
        en: "Motion experiments",
        ru: "Эксперименты с анимацией"
      },
      category: {
        en: "Code / Motion",
        ru: "Код / Анимация"
      },
      description: {
        en: "An exploration of transitions, interaction timing, and expressive interface movement.",
        ru: "Исследование переходов, ритма взаимодействия и выразительной анимации интерфейсов."
      },
      tags: [{ en: "Creative coding", ru: "Креативное программирование" }, { en: "Animation", ru: "Анимация" }, { en: "Prototype", ru: "Прототип" }],
      url: ""
    },
    {
      id: "interface-system",
      visual: "interface",
      title: {
        en: "Interface system",
        ru: "Система интерфейсов"
      },
      category: {
        en: "Product / UI",
        ru: "Продукт / UI"
      },
      description: {
        en: "A modular interface concept focused on hierarchy, consistency, and responsive behavior.",
        ru: "Концепция модульного интерфейса с акцентом на иерархию, согласованность и адаптивность."
      },
      tags: [{ en: "Design system", ru: "Дизайн-система" }, { en: "Responsive", ru: "Адаптивность" }, { en: "UX", ru: "UX" }],
      url: ""
    },
    {
      id: "creative-tools",
      visual: "tools",
      title: {
        en: "Creative tools study",
        ru: "Исследование творческих инструментов"
      },
      category: {
        en: "Technology / Concept",
        ru: "Технологии / Концепция"
      },
      description: {
        en: "A concept space for testing new workflows and creative technology ideas.",
        ru: "Концептуальная площадка для проверки новых рабочих процессов и идей на стыке технологий и творчества."
      },
      tags: [{ en: "Experiment", ru: "Эксперимент" }, { en: "Technology", ru: "Технологии" }, { en: "Concept", ru: "Концепция" }],
      url: ""
    }
  ]
};
