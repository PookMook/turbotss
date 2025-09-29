// @ts-expect-error-next-line
import { createConfig, globalCSS, v } from "./boomer.js" with { type: "macro" };

// The export are for TypeScript type inference, we are not going to use them.
export const { queries, themeTypeForV, theme, queriesTypeForM } = createConfig({
  queries: {
    mobile: "media (max-width: 768px)",
    tablet: "media (max-width: 1024px)",
    desktop: "media (min-width: 1025px)",
    dark: "media (prefers-color-scheme: dark)",
    light: "media (prefers-color-scheme: light)",
  },
  theme: {
    base: {
      colors: {
        // Brand colors
        brand: "oklch(0.55 0.24 262.67)",
        white: "oklch(1 0 0)",
        black: "oklch(0 0 0)",

        // Background colors
        backgroundPrimary: "#5a58f2",
        backgroundPrimaryFaded: "#ecebfe",
        backgroundCritical: "#e22c2c",
        backgroundCriticalFaded: "#fdeded",
        backgroundWarning: "#facc15",
        backgroundWarningFaded: "#fffae9",
        backgroundPositive: "#118850",
        backgroundPositiveFaded: "#edfdf5",
        backgroundNeutral: "#dfe2ea",
        backgroundNeutralFaded: "#f3f3f5",
        backgroundDisabled: "#eceef2",
        backgroundDisabledFaded: "#f5f6f9",
        backgroundElevationBase: "#ffffff",
        backgroundElevationRaised: "#ffffff",
        backgroundElevationOverlay: "#ffffff",
        backgroundPage: "#ffffff",
        backgroundPageFaded: "#f9f9fb",

        // Foreground/text colors
        foregroundPrimary: "#4f4cf0",
        foregroundCritical: "#c42525",
        foregroundWarning: "#7b6305",
        foregroundPositive: "#0d7544",
        foregroundNeutral: "#14181f",
        foregroundNeutralFaded: "#5b667e",
        foregroundDisabled: "#c6ccda",

        // Border colors
        borderPrimary: "#3b38ed",
        borderPrimaryFaded: "#dedcfb",
        borderCritical: "#bf2424",
        borderCriticalFaded: "#f3dad6",
        borderWarning: "#cfa90f",
        borderWarningFaded: "#ece2c4",
        borderPositive: "#0c6e40",
        borderPositiveFaded: "#d2eddb",
        borderNeutral: "#0000001f",
        borderNeutralFaded: "#00000014",
        borderDisabled: "#dfe2ea",

        // On-background colors (text colors for colored backgrounds)
        onBackgroundPrimary: "oklch(1 0 0)",
        onBackgroundCritical: "oklch(1 0 0)",
        onBackgroundWarning: "oklch(0 0 0)",
        onBackgroundPositive: "oklch(1 0 0)",
        onBackgroundNeutral: "oklch(0 0 0)",
        onBrand: "oklch(1 0 0)",

        // RGB variants for alpha channel support
        rgbBackgroundPrimary: "89.98949999999999, 88.0005, 241.99499999999998",
        rgbBackgroundPrimaryFaded:
          "236.0025, 235.00799999999998, 254.00549999999998",
        rgbBackgroundCritical: "226.0065, 43.9875, 43.9875",
        rgbBackgroundCriticalFaded: "253.011, 236.997, 236.997",
        rgbBackgroundWarning: "250.002, 204, 21.012",
        rgbBackgroundWarningFaded: "255, 250.002, 232.99349999999998",
        rgbBackgroundPositive: "17.008499999999998, 135.9915, 79.9935",
        rgbBackgroundPositiveFaded: "236.997, 253.011, 245.004",
        rgbBackgroundNeutral: "222.9975, 226.0065, 233.988",
        rgbBackgroundNeutralFaded: "242.9895, 242.9895, 245.004",
        rgbBackgroundDisabled: "236.0025, 237.9915, 241.99499999999998",
        rgbBackgroundDisabledFaded: "245.004, 245.9985, 249.00750000000002",
        rgbBackgroundElevationBase: "255, 255, 255",
        rgbBackgroundElevationRaised: "255, 255, 255",
        rgbBackgroundElevationOverlay: "255, 255, 255",
        rgbBackgroundPage: "255, 255, 255",
        rgbBackgroundPageFaded:
          "249.00750000000002, 249.00750000000002, 250.9965",
        rgbWhite: "255, 255, 255",
        rgbBlack: "0, 0, 0",
      },
      borders: {},
      borderStyles: {},
      borderWidths: {},
      radii: {
        small: "4px",
        medium: "8px",
        large: "12px",
      },
      shadows: {
        raised:
          "0px 1px 5px -4px rgba(0, 0, 0, 0.5), 0px 4px 8px 0px rgba(0, 0, 0, 0.05)",
        overlay:
          "0px 5px 10px 0px rgba(0, 0, 0, 0.05), 0px 15px 25px 0px rgba(0, 0, 0, 0.07)",
      },
      zIndices: {
        relative: "10",
        absolute: "100",
        fixed: "200",
      },
      transitions: {
        durationRapid: "100ms",
        durationFast: "200ms",
        durationMedium: "300ms",
        durationSlow: "400ms",
        easingStandard: "cubic-bezier(0.4, 0, 0.2, 1)",
        easingAccelerate: "cubic-bezier(0.4, 0, 1, 1)",
        easingDecelerate: "cubic-bezier(0, 0, 0.2, 1)",
      },
      layouts: {},
      fontSizes: {
        title1: "6rem",
        title2: "5rem",
        title3: "4rem",
        title4: "3.5rem",
        title5: "3rem",
        title6: "2.25rem",
        featured1: "2rem",
        featured2: "1.5rem",
        featured3: "1.25rem",
        body1: "1.125rem",
        body2: "1rem",
        body3: "0.875rem",
        caption1: "0.75rem",
        caption2: "0.625rem",
      },
      fonts: {
        title:
          "Inter, BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif",
        body: "Inter, BlinkMacSystemFont, -apple-system, Roboto, Helvetica, Arial, sans-serif",
        monospace:
          "Geist Mono, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      },
      fontWeights: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeights: {
        title1: "6.25rem",
        title2: "5.25rem",
        title3: "4.25rem",
        title4: "3.75rem",
        title5: "3.25rem",
        title6: "2.5rem",
        featured1: "2.5rem",
        featured2: "2rem",
        featured3: "1.75rem",
        body1: "1.75rem",
        body2: "1.5rem",
        body3: "1.25rem",
        caption1: "1rem",
        caption2: "0.75rem",
      },
      letterSpacings: {
        title1: "normal",
        title2: "normal",
        title3: "normal",
        title4: "normal",
        title5: "normal",
        title6: "normal",
        featured1: "normal",
        featured2: "normal",
        featured3: "normal",
        body1: "normal",
        body2: "normal",
        body3: "normal",
        caption1: "normal",
        caption2: "normal",
      },
      sizes: {
        viewportM: "660",
        viewportL: "900",
        viewportXl: "1280",
      },
    },
    dark: {
      colors: {
        // Background colors (dark theme)
        backgroundPrimary: "#524fea",
        backgroundPrimaryFaded: "#252544",
        backgroundCritical: "#d02626",
        backgroundCriticalFaded: "#3e1f1f",
        backgroundWarning: "#f1c512",
        backgroundWarningFaded: "#2c271f",
        backgroundPositive: "#14784a",
        backgroundPositiveFaded: "#1f2a23",
        backgroundNeutral: "#494f60",
        backgroundNeutralFaded: "#222835",
        backgroundDisabled: "#1e212a",
        backgroundDisabledFaded: "#171921",
        backgroundElevationBase: "#15171e",
        backgroundElevationRaised: "#191b23",
        backgroundElevationOverlay: "#1c1f28",
        backgroundPage: "#0f1116",
        backgroundPageFaded: "#111319",

        // Foreground/text colors (dark theme)
        foregroundPrimary: "#8b8af7",
        foregroundCritical: "#f36a6a",
        foregroundWarning: "#b4920c",
        foregroundPositive: "#18ab66",
        foregroundNeutral: "#eff1f5",
        foregroundNeutralFaded: "#c0c6d6",
        foregroundDisabled: "#434959",

        // Border colors (dark theme)
        borderPrimary: "#8c8bf3",
        borderPrimaryFaded: "#323164",
        borderCritical: "#f46969",
        borderCriticalFaded: "#5a2e29",
        borderWarning: "#b4920a",
        borderWarningFaded: "#453c1e",
        borderPositive: "#21ab6b",
        borderPositiveFaded: "#264431",
        borderNeutral: "#ffffff24",
        borderNeutralFaded: "#ffffff14",
        borderDisabled: "#262a34",

        // On-background colors (dark theme)
        onBackgroundNeutral: "oklch(1 0 0)",

        // RGB variants for alpha channel support (dark theme)
        rgbBackgroundPrimary: "82.008, 78.99900000000001, 233.988",
        rgbBackgroundPrimaryFaded: "37.0005, 37.0005, 68.0085",
        rgbBackgroundCritical: "208.0035, 37.995, 37.995",
        rgbBackgroundCriticalFaded: "61.990500000000004, 31.008, 31.008",
        rgbBackgroundWarning: "241.00050000000002, 196.98749999999998, 18.003",
        rgbBackgroundWarningFaded: "43.9875, 38.9895, 31.008",
        rgbBackgroundPositive: "19.992, 120.003, 74.001",
        rgbBackgroundPositiveFaded: "31.008, 41.9985, 35.0115",
        rgbBackgroundNeutral: "73.0065, 78.99900000000001, 96.00750000000001",
        rgbBackgroundNeutralFaded: "33.9915, 40.0095, 52.989000000000004",
        rgbBackgroundDisabled: "29.988, 32.997, 41.9985",
        rgbBackgroundDisabledFaded: "23.001, 24.990000000000002, 32.997",
        rgbBackgroundElevationBase: "21.012, 23.001, 29.988",
        rgbBackgroundElevationRaised: "24.990000000000002, 27.0045, 35.0115",
        rgbBackgroundElevationOverlay: "27.999, 31.008, 40.0095",
        rgbBackgroundPage: "14.994, 17.008499999999998, 22.0065",
        rgbBackgroundPageFaded:
          "17.008499999999998, 18.9975, 24.990000000000002",
      },
    },
  },
});

export const reset = () => {};

globalCSS({
  // Modern CSS Reset based on Josh Comeau's CSS Reset and other best practices
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "*": {
    margin: "0",
  },
  "html, body": {
    height: "100%",
    color: v("colors.foregroundNeutral"),
    backgroundColor: v("colors.backgroundPage"),
  },
  body: {
    lineHeight: v("lineHeights.body2"), // 1.5rem - closest to 1.5
    WebkitFontSmoothing: "antialiased",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root, #__next": {
    isolation: "isolate",
  },
  // Additional resets for better consistency
  "ul, ol": {
    listStyle: "none",
    padding: "0",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  table: {
    borderCollapse: "collapse",
    borderSpacing: "0",
  },
  fieldset: {
    border: "none",
    padding: "0",
  },
  legend: {
    padding: "0",
  },
  textarea: {
    resize: "vertical",
  },
  "input:focus, textarea:focus, select:focus, button:focus": {
    outline: `${v("radii.small")} solid currentColor`, // using 4px radius as closest to 2px
    outlineOffset: v("radii.small"), // using 4px radius as closest to 2px
  },
});
