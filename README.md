# eslint-plugin-no-global-lodash

[![view on npm](http://img.shields.io/npm/v/eslint-plugin-no-global-lodash.svg?style=flat)](https://www.npmjs.com/package/eslint-plugin-no-global-lodash)
[![Build Status](https://semaphoreci.com/api/v1/adalbertoteixeira/eslint-plugin-no-global-lodash/branches/master/shields_badge.svg)](https://semaphoreci.com/adalbertoteixeira/eslint-plugin-no-global-lodash)

Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
npm i eslint --save-dev
```

or 

```
  yarn add -D eslint
```

Next, install `eslint-plugin-no-global-lodash`:

```
  npm install eslint-plugin-no-global-lodash --save-dev
```

or

```
  yarn add -D eslint-plugin-no-global-lodash
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-global-lodash` globally.

## Usage

Add `no-global-lodash` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-global-lodash"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-global-lodash/no-global-lodash": 2
    }
}
```

## Supported Rules
