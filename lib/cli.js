const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const RenderText=require('./renderText');
const RenderShape=require('./renderShape');


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
                message: 'Choose the logo shape', 
            }, 
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What is the color of the shape?',
            }
            
            ]).then(({logoText,textColor,shape,shapeColor})=>
            {
                const logo=new RenderText(logoText,textColor);
                const renderLogoText=logo.render();
                const renderLogoShape=logoShape(shape,shapeColor);
                const finalLogo=displayLogo(renderLogoText,renderLogoShape);
                writeFile("./examples/generated-logo.svg",finalLogo,err=>{
                    console.log(err);
                })
                console.log("Desired Logo Generated!!");
                
            })

        } 

}

function logoShape(shape,shapeColor)
{
    let renderLogoShape;
    switch(shape)
    {
        case "Circle":
            const Circle=new RenderShape.Circle(shapeColor);
            renderLogoShape=Circle.render();
            break;
        case "Triangle":
            const Triangle=new RenderShape.Triangle(shapeColor);
            renderLogoShape=Triangle.render();
            break;
        case "Square":
            const Square=new RenderShape.Square(shapeColor);
            renderLogoShape=Square.render();
            break;

    }
    return renderLogoShape;
}

function displayLogo(renderLogoText,renderLogoShape)
{
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${renderLogoShape}
    ${renderLogoText}
    </svg>`;
}

module.exports=CLI;