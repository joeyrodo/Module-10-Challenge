const index = require("../index")
const fs = require("fs")


function circleGeneration() {
    return '<circle cx="150" cy="150" r="80" fill=">'
}

function generateCircle(input) {
    console.log("circle generating")
    fs.writeFileSync("logo.svg",
        `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <circle cx="150" cy="100" r="80" fill="${input.shapeColor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${input.textColor}">${input.text}</text>

</svg>`
    )
    return fs.readFileSync('logo.svg')
}

function squareGeneration() {
    return '<rect width="100%" height="100%" fill=">'
}

function generateSquare(input) {
    console.log("square generating")
    fs.writeFileSync("logo.svg",
        `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="200" height="200" fill="${input.shapeColor}" />

 <text x="100" y="125" font-size="60" text-anchor="middle" fill="${input.textColor}">${input.text}</text>

</svg>`
    )
    return fs.readFileSync('logo.svg')
}

function triangleGeneration() {
    return '<polygon points="150, 18 244, 182 56, 182" fill=">'
}

function generateTriangle(input) {
    console.log("triangle generating")
    fs.writeFileSync("logo.svg",
        `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <'<polygon points="150, 18 244, 182 56, 182" fill="${input.shapeColor}" />

 <text x="150" y="145" font-size="60" text-anchor="middle" fill="${input.textColor}">${input.text}</text>

</svg>`
    )
    return fs.readFileSync('logo.svg')
}

function generateShape(input) {
    console.log("Generating logo.svg")
    input.shape == 'Circle' ? generateCircle(input)
        : input.shape == 'Square' ? generateSquare(input)
            : input.shape == 'Triangle' ? generateTriangle(input)
                : console.log('invalid answer')
}

const start = function () {

    let input = index.input;
    input.text.length > 3 ? console.log("Too many letters, enter a maximum of 3! Please try again.")
        : input.text.length <= 3 ? generateShape(input)
            : console.log("something went wrong!")
};


module.exports.start = start;
module.exports.generateCircle = circleGeneration;
module.exports.generateSquare = squareGeneration;
module.exports.generateTriangle = triangleGeneration;
