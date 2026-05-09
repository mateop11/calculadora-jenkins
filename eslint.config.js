const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "commonjs",
            globals: {
                module: "readonly",
                require: "readonly",
                test: "readonly",
                expect: "readonly",
                __dirname: "readonly",
                console: "readonly"
            }
        }
    }
];