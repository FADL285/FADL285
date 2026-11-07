<p align="center">
  <a href="https://fadl.info">
    <img src="./assets/github-profile-banner.webp" alt="Mohamed Fadl — Senior Software Engineer" width="100%" />
  </a>
</p>

<p align="center">
  <img src="./assets/mf-horizontal-full-logo.webp" alt="MF monogram" width="260" />
</p>

<h2 align="center" style="font-weight: 300; color: #988e9f; margin-bottom: 25px;">&lt;About /&gt;</h2>

```javascript
class Mohamed_Fadl {
  ABOUT = `
    Hey 👋, I'm Mohamed Fadl — a Senior Software Engineer at Robusta Studio
    and a Certified Senior Vue.js Developer, focused on frontend engineering.

    I build reliable, high-performance web applications with Vue.js, Nuxt,
    and TypeScript, across e-commerce and learning platforms.

    My work includes frontend architecture, system migrations, SSR performance,
    caching, and mentoring. I also work with React, Next.js, and backend APIs.
  `

  constructor() {
    this.name = "Mohamed Fadl"
    this.about = this.ABOUT
    this.email = "mohamed@fadl.info"
    this.userName = "FADL285"
    this.location = "Cairo, Egypt"
    this.role = "Senior Software Engineer"
    this.website = "https://fadl.info"
  }

  workExperience() {
    return [
      { "Dec 2025–present": "Senior Software Engineer @ Robusta Studio" },
      { "Dec 2023–Dec 2025": "Software Engineer @ CyberDefenders" },
      { "May 2019–Oct 2023": "Front-End Engineer @ Spider-Te8" },
      { "Sep 2019–Feb 2020": "Front-End Engineer @ Alpha Egypt Group (part-time)" }
    ]
  }

  engineeringWork() {
    return [
      "Migrated client e-commerce: Vue 2 / Nuxt 2 → Vue 3 / Nuxt 4",
      "Resolved an SSR memory leak and implemented caching",
      "Post-deployment server measurements: 85% less memory, 40× throughput",
      "Lighthouse performance: ~30 → 99–100 on most tested pages",
      "Improved crawling, indexing, usability, and user journeys",
      "Mentor developers through technical guidance and code reviews"
    ]
  }

  projects() {
    return [
      {
        name: "ColorShift",
        stack: ["Nuxt 4", "Vue 3", "TypeScript"],
        features: [
          "Instant CSS color conversion and batch file processing",
          "Cancellable Web Worker, previews, and browser-side processing",
          "Unit and browser regression tests"
        ],
        source: "https://github.com/FADL285/ColorShift"
      },
      {
        name: "Typeform Judging Scoreboard",
        stack: ["Vue 3", "Pinia", "Tailwind CSS", "Node.js", "Express"],
        usedAt: ["IEEE VICTORIS", "University NASA Space Apps competitions"],
        features: [
          "Typeform integration, score aggregation, and team rankings",
          "Later improvements: authenticated APIs and regression tests"
        ],
        frontend: "https://github.com/FADL285/Typeform-Judging-Scoreboard-Frontend",
        backend: "https://github.com/FADL285/Typeform-Judging-Scoreboard-Backend"
      }
    ]
  }

  education() {
    return [
      { "2018–2022": "B.Sc. in Computer Engineering @ Mansoura University" },
      { "2022": "Full Stack JavaScript Developer Nanodegree @ Udacity / Egypt FWD" },
      { "2020": "Web Development Professional Nanodegree @ Udacity / Egypt FWD" }
    ]
  }

  certifications() {
    return [
      "Certified Senior Vue.js Developer — Certificates.dev, Dec 2024",
      "Certified Mid-Level Vue.js Developer — Certificates.dev, Oct 2024",
      "Mastering Nuxt: Full Stack Unleashed (Nuxt 4) — Vue School, Apr 2025",
      "Mastering Nuxt 3 — Vue School, Jul 2024",
      "The Vue.js 3 Masterclass",
      "Mastering Pinia"
    ]
  }

  skills() {
    return [
      // Core
      "HTML5", "CSS3", "Sass", "JavaScript (ES6+)", "TypeScript",

      // Frameworks
      "Vue.js", "Nuxt", "React", "Next.js",

      // UI & Styling
      "Tailwind CSS", "Bootstrap", "shadcn", "Nuxt UI", "PrimeVue",

      // State & Data
      "Pinia", "Vuex", "Zustand", "TanStack Query", "GraphQL",

      // Tools & Testing
      "Vite", "Webpack", "Git/GitHub", "Jest", "Vitest", "Playwright", "Cypress",

      // Backend & APIs
      "Node.js", "Express", "REST APIs", "PostgreSQL",

      // Engineering
      "Web Performance", "SSR", "Caching", "Frontend Architecture",
      "Accessibility", "Cross-Browser Compatibility"
    ]
  }

  currentlyLearning() {
    return [
      "Deepening backend and database skills for broader full-stack ownership",
      "AI integration and retrieval-augmented generation (RAG)"
    ]
  }

  volunteering() {
    return [
      { "Chairman": "IEEE Mansoura Computer Society Chapter (2022)" },
      { "Front-End Mentor": "CIS Team MU (2021–2022)" },
      { "PM / Frontend Lead / Webmaster": "CIS Team MU website" }
    ]
  }
}
```
