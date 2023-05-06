const index = require("../index")

const test = function() {
    let input = index.input;
    console.log("test complete" + input);
};

const test2 = function() {
    console.log("this is test2");
};

module.exports.test = test;