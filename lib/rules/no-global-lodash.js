/**
 * @fileoverview Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file
 * @author Adalberto Teixeira
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file",
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',
        schema: []
    },

    create: function(context) {

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            ImportDeclaration: function (node) {
              if (node.source.value === 'lodash') {
                context.report({
                  node,
                  loc: {
                    line: node.loc.end.line,
                    column: node.loc.start.column,
                  },
                  message: 'Expected global "lodash" not to be imported.',
                  fix: fixer => fixer.insertTextAfter(
                    node,'sd\n'.repeat(2 - 1)
                  ),
                })
              }
            }
        };
    }
};
