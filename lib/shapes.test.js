const shapes = require("./shapes")

it('circle generated properly', () => {
    expect(shapes.generateCircle()).toEqual(expect.stringContaining(
        `<circle cx="150" cy="150" r="80" fill=">`
    ))
})

it('square generated properly', () => {
    expect(shapes.generateSquare()).toEqual(expect.stringContaining(
        `<rect width="100%" height="100%" fill=">`
    ))
})


it('triangle generated properly', () => {
    expect(shapes.generateTriangle()).toEqual(expect.stringContaining(
        `<polygon points="150, 18 244, 182 56, 182" fill=">`
    ))
})

