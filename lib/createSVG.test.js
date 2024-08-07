const inquirer = require('inquirer');
const fs = require('fs');
const { createSVG, collectData } = require('../index');
const { expect } = require('@jest/globals');

jest.mock('inquirer');
jest.mock('fs');


describe('square test', () => {

const answers = {
  shape: 'square',
  shapeColor: 'black',
  text: 'LOGO',
  txtColor: 'white'
}
  test('black square with white text test', async () => {
  inquirer.prompt.mockResolvedValue(answers);
   const testSVG = await collectData();
   console.log(testSVG)
   expect(testSVG == `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g><rect x="73" y="40" width="160" height="160" fill="black" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="white">LOGO</text></g></svg>`
   )
  })
})

describe('circle test', () => {

const answers = {
  shape: 'circle',
  shapeColor: 'green',
  text: 'LOGO',
  txtColor: 'white'
}
  test('green circle with white text test', async () => {
  inquirer.prompt.mockResolvedValue(answers);
   const testSVG = await collectData();
   console.log(testSVG)
   expect(testSVG == `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   <g><circle cx="150" cy="115" r="80" fill="green"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="white">LOGO</text></g></svg>`
   )
  })
})

describe('triangle test', () => {

  const answers = {
    shape: 'triangle',
    shapeColor: 'blue',
    text: 'LOGO',
    txtColor: 'white'
  }
    test('blue triangle with white text test', async () => {
    inquirer.prompt.mockResolvedValue(answers);
     const testSVG = await collectData();
     console.log(testSVG)
     expect(testSVG == `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <g><rect x="73" y="40" width="160" height="160" fill="blue" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="white">LOGO</text></g></svg>`
     )
    })
  })

