module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        "vue/script-indent": ["error", 4, {
            "baseIndent": 0,
            "switchCase": 0,
            "ignores": []
        }],
        "indent": ['error', 4],
        "comma-dangle": ['error', {
            "arrays": "only-multiline",
            "objects": "only-multiline",
        }],
    }
}
