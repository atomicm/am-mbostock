var globals = {};

// Stash old global.
if ("d3" in global) globals.d3 = global.d3;

module.exports = require("./d3");

// Restore old global.
if ("d3" in globals) global.d3 = globals.d3; else delete global.d3;

// COMMENT by BP.


// COMMENT 2 by BP.
