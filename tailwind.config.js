/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "animation": {
        "marquee": "marquee 40s linear infinite",
      },
      "keyframes": {
        "marquee": {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(-100%)" },
        }
      },
      "colors": {
              "on-tertiary-fixed-variant": "#454747",
              "tertiary-fixed-dim": "#c6c6c7",
              "surface": "#f9f9f9",
              "on-secondary-fixed-variant": "#005225",
              "on-primary-fixed": "#1c1b1b",
              "secondary-fixed-dim": "#76db8f",
              "on-error": "#ffffff",
              "inverse-on-surface": "#f1f1f1",
              "on-primary-container": "#858383",
              "inverse-primary": "#c8c6c5",
              "tertiary-fixed": "#e2e2e2",
              "secondary": "#006d34",
              "tertiary-container": "#1a1c1c",
              "secondary-container": "#8ff5a6",
              "surface-dim": "#dadada",
              "surface-variant": "#e2e2e2",
              "on-background": "#1a1c1c",
              "on-secondary-container": "#007236",
              "primary-container": "#1c1b1b",
              "on-tertiary-fixed": "#1a1c1c",
              "on-secondary": "#ffffff",
              "surface-container-lowest": "#ffffff",
              "surface-tint": "#5f5e5e",
              "on-tertiary": "#ffffff",
              "primary-fixed-dim": "#c8c6c5",
              "inverse-surface": "#2f3131",
              "error-container": "#ffdad6",
              "outline-variant": "#c4c7c7",
              "on-primary": "#ffffff",
              "primary": "#000000",
              "background": "#f9f9f9",
              "surface-container": "#eeeeee",
              "on-tertiary-container": "#838484",
              "error": "#ba1a1a",
              "outline": "#747878",
              "on-secondary-fixed": "#00210b",
              "surface-container-high": "#e8e8e8",
              "primary-fixed": "#e5e2e1",
              "surface-container-low": "#f3f3f3",
              "on-surface-variant": "#444748",
              "on-error-container": "#93000a",
              "tertiary": "#000000",
              "on-primary-fixed-variant": "#474746",
              "surface-bright": "#f9f9f9",
              "secondary-fixed": "#92f8a9",
              "on-surface": "#1a1c1c",
              "surface-container-highest": "#e2e2e2"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "md": "24px",
              "xs": "4px",
              "xl": "80px",
              "lg": "48px",
              "sm": "12px",
              "container-max": "1280px",
              "base": "8px",
              "gutter": "24px"
      },
      "fontFamily": {
              "display-lg": ["Epilogue"],
              "label-bold": ["Inter"],
              "body-lg": ["Inter"],
              "body-md": ["Inter"],
              "headline-md": ["Epilogue"],
              "headline-lg": ["Epilogue"],
              "caption": ["Inter"]
      },
      "fontSize": {
              "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
              "label-bold": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "600"}],
              "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
              "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
              "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
              "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "500"}]
      }
    }
  },
  plugins: [],
}
