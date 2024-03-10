// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui({
            defaultTheme: 'dark',
            themes: {
                dark: {
                    colors: {
                        background: '#050a1f',
                        foreground: '#FFFFFFDD',
                        link: '#646cff',
                        primary: '#decdc0',
                        text: '#FFFFFFDD',
                        heading: '#FFFFFFDD'
                    }
                },
                light: {
                    colors: {
                        background: '#050a1f',
                        foreground: '#FFFFFFDD',
                        link: '#646cff',
                        primary: '#decdc0',
                        text: '#FFFFFFDD',
                        heading: '#FFFFFFDD'
                    }
                }
            }
        })
    ]
}
