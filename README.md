# eslint-plugin-no-global-lodash

Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-global-lodash`:

```
$ npm install eslint-plugin-no-global-lodash --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-global-lodash` globally.

## Usage

Add `eslint-no-global-lodash` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-no-global-lodash"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-no-global-lodash/no-global-lodash": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





