class Square extends Shapes
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
        xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" rx="10" ry="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>
        </svg>` ;
    }
}

export default Square;

