// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              background: 'rgba(205, 200, 255, 0.05)',
            },
            blockquote: {
              fontSize: '90%',
              color: colors.zinc[500],
              borderLeftColor: colors.zinc[700],
              'p::before': { display: 'none' },
              'p::after': { display: 'none' },
            },
            a: {
              textDecoration: 'none',
              borderBottom: `2px solid ${colors.cyan[800]}`,
              color: colors.cyan[400],
              transition:
                'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              '&:hover': {
                color: `${colors.zinc[900]} !important`,
                borderBottomColor: `${colors.cyan[200]} !important`,
                background: colors.cyan[200],
              },
            },
            code: {
              color: '#86e1fc',
              '&::before': { content: `"" !important` },
              '&::after': { content: `"" !important` },
              fontWeight: 'normal',
            },
            '[data-rehype-pretty-code-fragment]:nth-of-type(2) pre': {
              '[data-line]::before': {
                content: 'counter(line)',
                counterIncrement: 'line',
                display: 'inline-block',
                width: '1rem',
                marginRight: '1rem',
                textAlign: 'right',
                color: colors.slate[600],
              },
              '[data-highlighted-line]::before': {
                color: colors.slate[400],
              },
            },
          },
        },
      },
    },
  },
};
