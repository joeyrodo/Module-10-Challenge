const inquirer = require('inquirer');
const fs = require("fs");
const shapes = require("./lib/shapes")
let questions = [
    {
        // TEXT QUESTION
        type: 'input',
        name: 'text',
        message: 'Enter up to three letters for this logo: '
    },
    {
        // TEXT COLOR QUESTION
        type: 'input',
        name: 'textColor',
        message: 'Enter the color of the letters (keyword or hexidecimal): '
    },
    {
        // SHAPE QUESTION
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'Select a shape for the logo: '
    },
    {
        // SHAPE COLOR QUESTION
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color of the shape (keyword or hexidecimal): '
    },
   
]

inquirer.prompt(questions)
.then(answers => {
    module.exports.input = answers;
    shapes.test();
    console.log(answers);
})
