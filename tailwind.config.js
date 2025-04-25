/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
            colors: {
                teal_: 'var(--color-teal)',
                light: 'var(--color-light)',
                dark: 'var(--color-dark)',
                orange_: 'var(--color-orange)',
                slate400: 'var(--color-slate400)',
                slate600: 'var(--color-slate600)',
                slate700: 'var(--color-slate700)',
                slate800: 'var(--color-slate800)',

            }
        },
    },
    plugins: [],
}
