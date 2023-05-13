const{Circle,Square,Triangle}=require('../renderShape');

describe("Circle", ()=>{
    it("should render an SVG circle with the desired color", ()=>{
        const expectedCircle=`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red"/>`;
        const outputCircle=new Circle("red").render();
        expect(outputCircle).toEqual(expectedCircle);
    })
})

describe("Square", ()=>{
    it("should render an SVG square with the desired color", ()=>{
        const expectedSquare=`<rect x="50" height="200" width="200" fill="yellow"/>`;
        const outputSquare= new Square("yellow").render();
        expect(outputSquare).toEqual(expectedSquare);
    })
})

describe("Triangle", ()=>{
    it("should render an SVG triangle with the desired color", ()=>{
        const expectedTriangle=`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="cyan"/>`;
        const outputTriangle=new Triangle("cyan").render();
        expect(outputTriangle).toEqual(expectedTriangle);
    })
})