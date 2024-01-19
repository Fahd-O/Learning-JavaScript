
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

    student.active = true;

    let newMembers = [corper, student];

    newMembers.forEach(function(e) 
    {
        console.log(e.sayTesleem());
    });

    let pRoPeRtIeS = [];

    for(let pRoP in corper)
    {
        pRoPeRtIeS.push(pRoP);
    }

    console.log(pRoPeRtIeS);


    let pRoPeRtIeS2 = [];

    for(let pRoP2 in corper)
    {
        if(corper.hasOwnProperty(pRoP2))
        {
            pRoPeRtIeS2.push(pRoP2);
        }
    }

    console.log(pRoPeRtIeS2);
}