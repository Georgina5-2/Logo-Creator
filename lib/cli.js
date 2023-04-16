const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class CLI
{
        constructor()
        {

        }
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
            },
            ]).then(console.log)
    
       } 

}