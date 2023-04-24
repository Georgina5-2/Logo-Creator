class Circle extends Shapes
{
    // constructor(logoText,textColor,shape,shapeColor)
    // {
    //     super(logoText,textColor);
    //     this.shape=shape;
    //     this.shapeColor=shapeColor;
        
    // }
    render()
    {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill="${this.color}" stroke-width="5"/></svg>`
    }
    
}

export default Circle;