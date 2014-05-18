#!/usr/bin/env node

var mini_harp = require("."),
    parseArgs = require("minimist");

var pars = parseArgs(process.argv); // Input parameters

port = pars.port || 4000;
root = pars._[2] || process.cwd();

console.log("Starting mini-harp on http://localhost:"+port);
mini_harp(root).listen(port);
