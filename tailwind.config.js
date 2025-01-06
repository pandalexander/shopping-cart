/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    spacing: {
      "spacing-1": "var(--spacing-1)",
      "spacing-2": "var(--spacing-2)",
      "spacing-3": "var(--spacing-3)",
      "spacing-4": "var(--spacing-4)",
      "spacing-5": "var(--spacing-5)",
      "spacing-6": "var(--spacing-6)",
      "spacing-7": "var(--spacing-7)",
      "spacing-8": "var(--spacing-8)",
      "spacing-9": "var(--spacing-9)",
      "spacing-10": "var(--spacing-10)",
    },
  },
  plugins: [],
};
