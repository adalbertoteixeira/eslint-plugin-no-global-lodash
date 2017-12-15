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

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2017, sourceType: 'module' } });
ruleTester.run("no-global-lodash", rule, {

    valid: [
      {
        code: "import get from 'lodash.get'",
      }
    ],

    invalid: [
        {
          code: "import { get, isEqual, cloneDeep } from 'lodash'",
          errors: [{
            message: 'Expected get to be imported as "import get from \'lodash.get\'".',
            type: 'ImportDeclaration',
          }, {
            message: 'Expected isEqual to be imported as "import isEqual from \'lodash.isequal\'".',
            type: 'ImportDeclaration',
          }, {
            message: 'Expected cloneDeep to be imported as "import cloneDeep from \'lodash.clonedeep\'".',
            type: 'ImportDeclaration',
          }]
        },
        {
          code: `
              import _, {
                  get,
                  isEqual,
                  cloneDeep
              } from 'lodash'
          `,
          errors: [{
            message: 'Expected global "lodash" not to be imported.',
            type: 'ImportDeclaration',
          }, {
            message: 'Expected get to be imported as "import get from \'lodash.get\'".',
            type: 'ImportDeclaration',
          }, {
            message: 'Expected isEqual to be imported as "import isEqual from \'lodash.isequal\'".',
            type: 'ImportDeclaration',
          }, {
            message: 'Expected cloneDeep to be imported as "import cloneDeep from \'lodash.clonedeep\'".',
            type: 'ImportDeclaration',
          }]
        },
        {
          code: "import _ from 'lodash'",
          errors: [{
            message: 'Expected global "lodash" not to be imported.',
            type: 'ImportDeclaration',
          }]
        }
    ]
});
