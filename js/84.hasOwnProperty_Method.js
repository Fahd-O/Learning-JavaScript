{
    let User =
    {
        active: false,
        sayTesleem: function()
        {
            return this.name + " says assalamu alaikum";
        }
    }

    let student =
    {
        name: 'ibn abbas',
        studies: ['mechanics', 'AI', 'data science']
    }

    let corper =
    {
        name: 'abu bakr',
        teaches: ['physics', 'robotics'],
        sayTesleem: function()
        {
            let message = this.name + " teaches ";
            this.teaches.forEach(function(e)
            {
                message += e + " ";
            });
            return message;
        }
    };

    Object.setPrototypeOf(student, User);
    Object.setPrototypeOf(corper, User);

    corper.active = true;

    let newMembers = [corper, student];

    newMembers.forEach(function(e) 
    {
        console.log(e.sayTesleem());
    });

    console.log("Is name inside corper:", corper.hasOwnProperty("named"));

    console.log("Is name not inside corper:", corper.named == undefined);

    console.log(corper);
}