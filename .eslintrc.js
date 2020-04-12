module.exports = {
  "extends": ["taro", "airbnb"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/first": 0,
    "comma-dangle": ["error", "never"],
    "no-console": 0,
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": true
    }],
    "no-plusplus": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [2, {
      "vars": "all",
      "varsIgnorePattern": "Taro",
      "args": "none",
      "ignoreRestSiblings": true,
      "argsIgnorePattern": "^_",
      "caughtErrors": "none"
    }],
    "@typescript-eslint/no-unused-vars": [2, {
      "vars": "all",
      "varsIgnorePattern": "Taro",
      "args": "none",
      "ignoreRestSiblings": true,
      "argsIgnorePattern": "^_",
      "caughtErrors": "none"
    }],
    "grouped-accessor-pairs": 0,
    "no-constructor-return": 0,
    "linebreak-style": 0,
    "no-dupe-else-if": 0,
    "no-import-assign": 0,
    "no-setter-return": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "no-restricted-syntax": 0,
    "no-prototype-builtins": 0,
    "prefer-regex-literals": 0,
    "class-methods-use-this": ['error', {
      "exceptMethods": [
        'componentWillMount',
        'componentDidMount',
        'componentDidShow',
        'componentDidHide',
        'componentDidCatchError',
        'componentDidNotFound',
        'componentWillReceiveProps',
        'componentWillUnmount',
        'componentDidHide',
        'render'
      ]
    }],
    "react/static-property-placement": ["error", "static public field"],
    "react/sort-comp": [1, {
      order: [
        'defaultProps',
        'propTypes',
        'config',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    "react/destructuring-assignment": "off",
    "react/no-unused-state": "error",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-deprecated": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "no-var": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "@typescript-eslint/explicit-member-accessibility": "off",
    // 优先使用 interface 而不是 type
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/member-delimiter-style": [
      'error',
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": false
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        },
        "overrides": {
          "interface": {
            "multiline": {
              "delimiter": "semi",
              "requireLast": true
            }
          }
        }
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "jsx-a11y"]
}
