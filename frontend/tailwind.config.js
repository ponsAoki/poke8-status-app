module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.html',
            './src/**/*.vue',
        ]
    },
    theme: {
        extend: {},
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1034px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

        }
    },
    plugins: [],
    variants: {
        flexDirection: ['responsive'],
        fontSize: ['responsive', 'hover', 'focus'],
        flexWrap: ['responsive'],
    }
}