/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90E2", // Calming blue
          dark: "#357ABD", // Darker blue for hover/active states
          light: "#B3D4FC", // Lighter blue for backgrounds
        },
        background: {
          DEFAULT: "#FFFFFF", // White background
          dark: "#181818", // Dark mode background
        },
        surface: {
          DEFAULT: "#E4E4E4", // Light gray surface
          dark: "#242424", // Dark mode surface
        },
        foreground: {
          DEFAULT: "#333333", // Dark gray for text and elements
          muted: "#666666", // Muted foreground for less important text
          light: "#FAFAFA", // Light foreground for dark mode
          dark: "#0D0D0D", // Darker foreground for strong contrast in light mode
        },
        success: {
          DEFAULT: "#27AE60", // Green for positive actions or progress
          dark: "#1F8A50", // Darker green for dark mode
        },
        warning: {
          DEFAULT: "#F39C12", // Orange for warnings or attention
          dark: "#C67A0E", // Darker orange for dark mode
        },
        danger: {
          DEFAULT: "#E74C3C", // Red for errors or destructive actions
          dark: "#C0392B", // Darker red for dark mode
        },
        info: {
          DEFAULT: "#3498DB", // Sky blue for informational highlights
          dark: "#2879B1", // Darker blue for dark mode
        },
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      textColor: {
        DEFAULT: "#333333", // Dark gray for text
        muted: "#666666", // Muted text for less important content
        light: "#FAFAFA", // Light text for dark mode
        dark: "#0D0D0D", // Darker text for high contrast in light mode
      },
      backgroundColor: {
        highlight: "#FFEE93", // Yellow for highlighted text or notes
        note: "#FFF8E1", // Light yellow for background of notes
        dark: {
          highlight: "#FFE066", // Dark mode yellow for highlighted text or notes
          note: "#FFF0B3", // Dark mode light yellow for background of notes
        },
      },
      borderColor: {
        DEFAULT: "#E0E0E0", // Light gray for borders
        dark: "#3D3D3D", // Dark mode border color
      },
    },
  },
  darkMode: "class", // Enable dark mode with a specific class
  plugins: [require("tailwindcss-primeui")],
};
