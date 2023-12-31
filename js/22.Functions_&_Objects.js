{
    let potision = 
    {
        x: 10,
        y: 20,
        print: function()
        {
            console.log(` X: ${this.x}, Y: ${this.y} `)
        }
    }

    var myPotision = potision;

    let x = 11;
    var y = x;

    console.log(potision);
    console.log(myPotision);

    myPotision.x = 15;

    console.log(potision);

    potision.print();
}