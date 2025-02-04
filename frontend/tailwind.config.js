/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        tourney: ["Tourney", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        rubikvinyl: ["Rubik Vinyl", "sans-serif"],
        rubikmono: ["Rubik Mono One", "sans-serif"],
        archivoblack: ["Archivo Black", "sans-serif"],
        leaguespartan: ["League Spartan", "sans-serif"],
      }
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      xxlbold: '900',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '10': '10px',
      '20': '20px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '60': '60px',
    },
  },
  plugins: [],
}

