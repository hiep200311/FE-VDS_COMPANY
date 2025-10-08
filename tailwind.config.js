
module.exports = {
    theme: {
        extend: {
            animation: {
                'rgb-gradient': 'rgbLed 2s ease infinite',
            },
            keyframes: {
                rgbLed: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
        },
    },
    plugins: [],
}
