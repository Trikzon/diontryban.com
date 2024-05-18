module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: [
    "eslint:recommended",
  ],
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  ignorePatterns: [
    "**/dist/**/*",
    "**/*.css.d.ts",
    ".eslintrc.cjs",
    "vite.config.ts",
  ],
  overrides: [
    // * -- Global overrides --
    {
      files: [
        "**/*",
      ],

      plugins: [
        "import",
        "simple-import-sort",
        "unused-imports",
      ],

      rules: {
        // Enforce consistent spacing in object and array declarations
        //
        // Mainly added to ensure that imports have correct spacing
        // because the fixes by default use no spacing
        "object-curly-spacing": ["error", "always", {
          arraysInObjects: false,
          objectsInObjects: true,
        }],

        // Make sure imports are sorted
        "simple-import-sort/imports": "error",

        // Make sure imports are used
        "unused-imports/no-unused-imports": "error",

        // Prevent race conditions with promises
        "require-atomic-updates": "error",

        // Style
        "array-bracket-newline": ["error", "consistent"],
        "array-element-newline": ["error", "consistent"],
        "arrow-spacing": ["error", { before: true, after: true }],
        "brace-style": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "curly": "error",
        "dot-location": ["error", "property"],
        "eol-last": ["error", "always"],
        "generator-star-spacing": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "new-parens": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "no-tabs": "error",
        "padded-blocks": ["error", "never"],
        "switch-colon-spacing": "error",
        "yield-star-spacing": "error",

        "spaced-comment": ["error", "always", {
          line: {
            markers: ["/"],
          },
          block: {
            balanced: true,
          },
        }],

        "indent": ["error", 2, { SwitchCase: 1 }],
      },
    },
    // * -- Typescript --
    {
      files: [
        "*.ts",
        "*.tsx",
      ],

      plugins: [
        "@typescript-eslint",
      ],

      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/strict",
      ],

      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: [
          "./tsconfig.json",
          "./packages/*/tsconfig.json",
        ],
      },

      rules: {
        // * Increased severity from default

        // Always use type imports where possible for consistency and compatibility with build tools
        "@typescript-eslint/consistent-type-imports": ["error", {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
        }],

        // Always use top-level type imports
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

        // Always merge imports that have the same path
        "import/no-duplicates": "error",

        // Enable and set severity to error
        // Unhandled promises can cause crashes and hard to fix bugs
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-floating-promises": [
          "error",
          {
            ignoreVoid: false,
          },
        ],

        // Style
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "semi",
              requireLast: true,
            },
            singleline: {
              delimiter: "semi",
              requireLast: false,
            },
            multilineDetection: "brackets",
          },
        ],

        // Disallow code like `return console.log()`
        "@typescript-eslint/no-confusing-void-expression": [
          "error",
          {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: true,
          },
        ],

        // Require all switch cases to be handled for safety
        "@typescript-eslint/switch-exhaustiveness-check": "error",

        // Avoid accidental [object Object]s when using toString()
        "@typescript-eslint/no-base-to-string": "error",

        // * Reduced severity from default

        // Has issues with inheritance
        "@typescript-eslint/no-unused-vars": "off",

        // Not needed due to Typescript compiler
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",

        // Not using non-null assertions when a value is already known to be non-null makes code more complex.
        //
        // Additionally, this rule is normally used with tsconfig.noUncheckedIndexedAccess turned off.
        // This repo has noUncheckedIndexedAccess turned on, making indexers return 'type | undefined' rather than simply
        // 'type'. This makes the code much safer, but can have *many* false positives. In these cases, non-null
        // assertions should be used.
        "@typescript-eslint/no-non-null-assertion": "off",

        // Deleting properties of record types is valid
        "@typescript-eslint/no-dynamic-delete": "off",

        // Less strict void usage
        "@typescript-eslint/no-invalid-void-type": "off",

        // Incorrect when decorators on used on constructor parameters
        // such as with the @inject tsyringe decorator
        "@typescript-eslint/no-useless-constructor": "off",

        // Sometimes using the bracket accessor is more consistent even though it might not be necessary
        "@typescript-eslint/dot-notation": "off",
      },
    },
    // * -- React --
    {
      files: [
        "*.tsx",
      ],

      plugins: [
        "jsx-a11y",
        "react-hooks",
        "react-refresh"
      ],

      extends: [
        "plugin:react/recommended",
        // Use strict over recommended because it doesn't introduce many new errors
        "plugin:jsx-a11y/strict",
      ],

      settings: {
        react: {
          version: "detect",
        },
      },

      rules: {
        // * Increased severity from default

        // Accessibility and prevents unintended behavior
        // in the case of form buttons.
        "react/button-has-type": "error",

        // Optimization and prevents unintended behavior due to
        // array indices being used as child keys.
        //
        // Disabled for now since it requires lot of changes to implement.
        // "react/no-array-index-key": "error",

        // Prevents display names from being undefined
        // Useful for debugging and rarely a problem
        "react/display-name": "error",

        // Children should be defined as child elements rather than a property
        // of the parent tag
        "react/no-children-prop": "error",

        // Prevents dangerouslySetInnerHTML and children from being used together
        // since dangerouslySetInnerHTML will overwrite children.
        // Because of this, React will crash if this is done.
        //
        // The rule doesn't seem to work, but no harm in enabling.
        "react/no-danger-with-children": "error",

        // Optimization, this makes sure that functions passed as props are stable.
        // For example, callbacks have to be wrapped with useCallback
        // or declared outside of the component render function.
        //
        // Disabled for now since it requires lot of changes to implement.
        // "react/jsx-no-bind": "error",

        // Increase severity to error
        // Wrong usage can change code behaviour
        "react-hooks/exhaustive-deps": "error",

        // Style
        "react/jsx-tag-spacing": [
          "error",
          {
            closingSlash: "never",
            beforeSelfClosing: "never",
            afterOpening: "never",
            beforeClosing: "never",
          },
        ],

        // * Reduced severity from default

        // Requires characters like ; " ' to be escaped, leading to hard
        // to read code
        "react/no-unescaped-entities": "off",

        // Unnecessary
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};