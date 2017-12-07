/**
 * @fileoverview Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file
 * @author Adalberto Teixeira
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-global-lodash"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-global-lodash", rule, {

    valid: [
      {
        code: "import get from 'lodash.get'",
        parserOptions: { sourceType: 'module', ecmaVersion: 6 },
      }
    ],

    invalid: [
        {
            code: "import { get, isEqual, cloneDeep } from 'lodash'",
            parserOptions: { sourceType: 'module', ecmaVersion: 6 },
            errors: [{
                message: 'Expected global "lodash" not to be imported.',
                type: 'ImportDeclaration',
            }]
        },
        {
            code: "import _, { get, isEqual, cloneDeep } from 'lodash'",
            parserOptions: { sourceType: 'module', ecmaVersion: 6 },
            errors: [{
                message: 'Expected global "lodash" not to be imported.',
                type: 'ImportDeclaration',
            }]
        },
        {
            code: "import _ from 'lodash'",
            parserOptions: { sourceType: 'module', ecmaVersion: 6 },
            errors: [{
                message: 'Expected global "lodash" not to be imported.',
                type: 'ImportDeclaration',
            }]
        }
    ]
});
