#!/usr/bin/env node

var mini_harp = require("mini-harp"),
    parseArgs = require("minimist");

var pars = parseArgs(process.argv); // Input parameters

if (pars._[2]) {console.log("ture");} else {console.log("false")};
mini_harp(pars.port, pars._[2]);
