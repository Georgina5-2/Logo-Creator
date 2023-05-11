const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const renderText=require('./renderText');
const renderShape=require('./renderShape');


class CLI
{
        
       run()
       {
        return inquirer.prompt([
            {
                type: 'maxlength-input',
                name: 'logoText',
                message: 'Enter the text for Logo',
                maxLength: 3,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What is the color of the text?',
            },
            {
                type: 'list',
                name: 'shape',
                choices:['Circle','Triangle','Square'],
                message: 'Choose the license type', 
            }, 
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What is the color of the shape?',
            }
            
            ]).then(({logoText,textColor,shape,shapeColor})=>
            {
                const logo=new logoText(logoText,textColor);
                const logoText=logo.render();
                const logoShape=logoShape(shape,shapeColor);
                const finalLogo=displayLogo(logoText,logoShape);
                writeFile("./examples/generated-logo.svg",finalLogo,err=>{
                    console.log(err);
                })
                console.log("Desired Logo Generated!!");
                
            })

        } 

}

function logoShape(shape,shapeColor)
{
    let logoShape;
    switch(shape)
    {
        case "circle":
            const Circle=new renderShape.Circle(shapeColor);
            logoShape=Circle.render();
            break;
        case "triangle":
            const Triangle=new renderShape.Triangle(shapeColor);
            logoShape=Triangle.render();
            break;
        case "square":
            const Square=new renderShape.Square(shapeColor);
            logoShape=Square.render();
            break;

    }
    return renderShape;
}

function displayLogo(logoText,shape)
{
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
    ${svgText}
    </svg>`;
}

module.exports=CLI;