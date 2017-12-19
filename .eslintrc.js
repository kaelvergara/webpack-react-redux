module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true,
            "classes": true
        }
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "babel"
    ],
    "env": {
        "browser": true,
        "mocha": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "after": true,
        "afterEach": true,
        "before": true,
        "beforeEach": true,
        "describe": true,
        "it": true,
        "sinon": true,
        "require": true
    },
    "extends": [
        "plugin:jsx-a11y/recommended"
    ],
    "rules": {
        "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "every": [ "id" ]
            },
            "allowChildren": false
        }]
    }
};
