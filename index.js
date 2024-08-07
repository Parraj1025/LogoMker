//importing required modules

const inquirer = require('inquirer');
const path = require('path')
const fs = require('fs');

//function created to createSVG file given required data
        //need to create a function to doWork of currently repeated code
async function createSVG(fileName, answers) {
    
    let svgData = ''
    let baseScript = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>`
    let txtScript = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.txtColor}">${answers.text}</text></g></svg>`
    if (answers.shape == 'square'){
        const shapeInfo =`<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}" />`;
        baseScript += shapeInfo;
        baseScript += txtScript;
        svgData = baseScript;
        console.log(svgData);
    }
    if(answers.shape == 'circle') {
        const shapeInfo = `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
        baseScript += shapeInfo;
        baseScript += txtScript;
        svgData = baseScript;
        console.log(svgData)
    }
    if(answers.shape == 'triangle'){
        const shapeInfo = `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`
        baseScript += shapeInfo;
        baseScript += txtScript;
        svgData = baseScript
    }

    const folderPath = path.join(__dirname, './lib/examples/')
    const filePath = path.join(folderPath, `${answers.text}.svg`)

    fs.writeFile(filePath, svgData, (err) => {
    console.log(err)
    })
    return svgData
}


//use of inquirer to gather user input required to create SVG

async function collectData() {
   await inquirer.prompt([
        {
            name: 'shape',
            type: 'list',
            choices: ['square','circle','triangle'],
            message: 'select shape'
        },
        {
            name: 'shapeColor',
            type: 'input',
            message: 'select shape color'
        },
        {
            name: 'text',
            type: 'input',
            message: 'enter logo text'
        },
        {
            name: 'txtColor',
            type: 'input',
            message: 'enter text color'
        }
    ]).then((answers) => {
        createSVG(answers.text, answers)
        return createSVG(answers.text, answers)
    })
}

//export of functions

module.exports = {collectData,createSVG}