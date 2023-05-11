const inquirer=require('inquirer');

class RenderText{
    constructor(logoText,textColor)
    {
        this.logoText=logoText;
        this.textColor=textColor;
    }

    render()
    {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>`
    }
}

module.exports=RenderText;