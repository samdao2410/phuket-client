module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      xl: '11.25rem'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '0.08em'
    },
    fontSize: {
      sxs: '0.625rem',
      xs: '.75rem',
      '0.8xl': '0.8rem',
      sm: '.875rem',
      tiny: '.9375rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1.5xl': '1.35rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem',
      '3xl': '1.875rem',
      '3.5xl': '2rem',
      '4xl': '2.25rem',
      '4.25xl': '2.125rem',
      '4.5xl': '2.5rem',
      '4.75xl': '2.625rem',
      '5xl': '3rem',
      '5.125xl': '3.125rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    extend: {
      colors: {
        primary: '#b0a99f',
        dark: '#333',
        light: '#F2F2F0',
        'light-opacity-200': 'rgba(246, 246, 244, 0.5)',
        'light-radial-gradient':
          'radial-gradient(40.36% 127.57% at 50% 34.4%, rgba(255, 255, 255, 0) 0%, #E5E5E5 100%)',
        black: '#231F20',
        'black-200': '#282828',
        'black-300': '#333332',
        'black-400': '#000000',
        'black-opacity': 'rgba(29, 29, 27, 0.9)',
        'black-opacity-200': 'rgba(29, 29, 27, 0.4)',
        'black-transparent': 'rgba(0, 0, 0, 0.1)',
        gray: '#d4d4d4',
        'gray-200': '#e8eaef',
        'gray-400': '#828282',
        'gray-600': '#f2f2f0',
        brown: '#DDD6CE',
        'brown-200': '#726D65',
        'brown-300': '#534D4D',
        'brown-400': '#E5E5E5',
        'brown-500': '#DED1B9',
        'brown-600': '#C4B9A9',
        'brown-transparent-60': 'rgba(114, 109, 101, 0.6)',
        'black-blue': '#374255',
        pink: {
          b: '#e51175',
          h: '#d00062',
          a: '#bf005a',
          c: '#E21941'
        },
        error: '#ff4d4f',
        white: '#ffffff',
        'white-200': '#EEEEEB',
        'white-400': '#f6f6f4',
        blue: '#37507E',
        'blue-200': '#bfdcdf',
        'blue-400': '#0000EE',
        red: '#f12f19',
        'red-200': '#DD3838',
        'red-300': '#E44000',
        'red-400': '#eb5342',
        purple: '#5F377E',
        green: {
          a: '#088366'
        },
        netural: {
          1: '#949494',
          5: '#2A2A2A',
          3: '#0000EE'
        },
        violet: '#5F377E',
        orange: '#FBA928',
        gold: '#BB977B'
      },
      spacing: {
        'full-180': '180%',
        'full-200': '200%'
      },
      minWidth: {
        0: '0',
        52: '13rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%'
      },
      spacing: {
        97: '25rem'
      },
      lineHeight: {
        13: '3.25rem'
      }
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      cormorant: ['Cormorant Garamond', 'serif'],
      noto: ['Noto Serif JP', 'serif']
    }
  },
  variants: {
    extend: {
      padding: ['last'],
      margin: ['last'],
      borderWidth: ['last'],
      borderColor: ['last']
    }
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          '@apply mx-auto': {},
          '@apply px-4': {}
        }
      });
    }
  ]
};
