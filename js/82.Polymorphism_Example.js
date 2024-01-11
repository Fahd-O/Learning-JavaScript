{
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
    }
}

function doStuff()
{
    return 1 + 1;
}

// console.log(doStuff());

let test = new doStuff();

if(doStuff.prototype === Object.getPrototypeOf(test))
{
    console.log('Match');
}

function Taco()
{
    this.toppings = ['cheese'];
}

Taco.prototype.make = function()
{
    console.log('Making a taco...');
}

let myTaco = new Taco();
let newTaco = new Taco();