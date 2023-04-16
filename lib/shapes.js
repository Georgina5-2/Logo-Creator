import circle from './lib/circle.js';
import square from './lib/square.js';
import triangle from './lib/triangle.js';
import inquirer from 'inquirer';

class Shapes
{
    constructor(logoText,textColor)
    {
        this.logoText=logoText;
        this.textColor=textColor;
        // this.shape=shape;
        // this.shape_Color=shape;
        if(logoText.length > 3)
        {
            throw new Error('The logo must contain only three characters');
        }
    }
    
}