/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        color: {
          bg: "var(--bg)",
          bg_nav: "var(--bg-nav)",
          bg_footer: "var(--bg-footer)",
          text: "var(--text)",
          secondary_text: "var(--secondary-text)",
          border_color: "var(--border-color)",
          bg_solar: "var(--bg-solar)"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
