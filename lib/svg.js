const CLI=require('./lib/cli');
const SVG=require('./lib/svg');
const Circle=require('./lib/circle');

class SVG
{
    constructor()
    {
        this.textElement='';
        this.shapeElement='';
        
    }
    render()
    {
        // this.setText(message,color);
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }

    setText(message,color)
    {
        this.textElement=`<text x="100" y="100" font-size="50px" fill="${color}">${message}</text>`
        return this.textElement;
        this.setShape(shape);
    }

    setShape(shape)
    {
        this.shapeElement=shape.render();
        return this.shapeElement;
    }
    setText(message,color);
}
module.exports=SVG;