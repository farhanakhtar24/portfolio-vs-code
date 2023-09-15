module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#1F2428",
        "nav-blue-light": "#2F3A44",
        "taskbar-blue": "#24292E",
        "iconbar-blue": "#24292E",
        "sidebar-blue": "#1F2428",
        "main-pages-blue": "#24292E",
        "page-navbar-blue": "#1F2428",
        "page-navbar-gray": "#5B595C",
      },
      fontFamily: {
        PlexMono: ["IBM Plex Mono", "monospace"],
        NotoSansMono: ["Noto Sans Mono", "monospace"],
      },
    },
    backgroundImage: {
      "i-code-websites": "url('/src/I_CODE_WEBSITES.svg')",
    },
  },
  plugins: [],
};
