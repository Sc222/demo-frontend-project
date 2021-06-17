module.exports = {
    // extend some company style config can be used instead of react-app (airbnb for example)
    parser: "@typescript-eslint/parser",
    plugins: ["prettier", "@typescript-eslint"],
    extends: ["react-app", "plugin:@typescript-eslint/recommended", "prettier"],
    rules: {
        "prettier/prettier": ["warn"], //off, warn or error

        // Не будет запрещать создавать пустые интерфейсы
        "@typescript-eslint/no-empty-interface": ["off"],

        // Не будет просить убрать модиикаторы доступа если переменную сразу объявили
        "@typescript-eslint/no-inferrable-types": ["off"],

        // Naming conventions
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        "@typescript-eslint/naming-convention": [
            "warn",

            // Правила идут по порядку и переопределяют друг друга

            //Все члены, которые не попали в дальнейшие селекторы должны быть в camelCase по умолчанию
            {
                selector: "memberLike",
                format: ["camelCase"],
            },

            // Константы пишутся в PascalCase
            {
                selector: "variable",
                modifiers: ["const"],
                format: ["PascalCase"],
            },

            // Статичные члены пишутся в PascalCase
            {
                selector: "memberLike",
                modifiers: ["static"],
                format: ["PascalCase"],
            },

            // Приватные члены пишутся с _
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            },

            // Интерфейсы пишутся в PascalCase и начинаются на I
            {
                selector: "interface",
                format: ["PascalCase"],
                prefix: ["I"],
            },

            // Классы и enum в PascalCase
            {
                selector: "class",
                format: ["PascalCase"],
            },
            {
                selector: "enum",
                format: ["PascalCase"],
            },

            //TODO: как писать enumMember?
            {
                selector: "enumMember",
                format: ["PascalCase", "camelCase"],
            },
        ],
    },
};
