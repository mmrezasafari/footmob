const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
    return {
        CSS: [
            'app.css'
        ],

        Plugins: [
            require('postcss-rtlcss')({rtlPrefix})
        ]
    }
})