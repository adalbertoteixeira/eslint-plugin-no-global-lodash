/**
 * @fileoverview Lodash should not be loaded globally. If a lodash method is needed only the package for that method should be loaded in the file.
 * @author Adalberto Teixeira
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



