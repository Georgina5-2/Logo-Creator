const RenderText=require('../renderText');
describe("RenderText",()=>{
    it("should render the text element for the logo with text and color",()=>{
        const expectedText='<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">JEP</text>';
        const outputText=new RenderText("JEP","white").render();
        expect(outputText).toEqual(expectedText);
    })
})