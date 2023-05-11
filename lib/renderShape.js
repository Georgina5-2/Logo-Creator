const inquirer=require('inquirer');

class Shapes{
    constructor(shapeColor)
    {
       this.shapeColor=shapeColor; 
    }
}

class Circle extends Shapes
{
    constructor(shapeColor)
    {
        super(shapeColor);
    }

    render()
    {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shapes
{
    constructor(shapeColor)
    {
        super(shapeColor);
    }

    render()
    {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`;
    }
}

class Triangle extends Shapes
{
    constructor(shapeColor)
    {
        super(shapeColor);
        
    }

    render()
    {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`
    }
}

module.exports={Circle,Square,Triangle};
        

