module.exports = {
    content: [
        './*.{html,js}',
        './*.{html,js}',
        './index2.html',
      ],
    
  mode: "jit",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      max2xl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      maxxl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      maxlg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      maxmd: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      maxsm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      padding: "1rem",
      center: true,
    },
    transitionDuration: {
      '0': '0ms',
      '2000': '2000ms',
    }
  },
};
