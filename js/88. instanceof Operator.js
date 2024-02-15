{
    function User()
    {
        this.active =false;
    }

    User.prototype.sayTesleem = function()
    {
        return this.name + " says assalamu alaikum";
    }

    function Student(n, m)
    {
        this.name = n;
        this.major = m;
    }

    Student.prototype = new User();

    function Teacher(n, t)
    {
        this.name = n;
        this.teaches = t;
    }

    Teacher.prototype = new User();
    Teacher.prototype.sayTesleem = function()
    {
        return "Teacher says assalamu alaikum";
    };

    let student1 = new Student('Khalid', "Data Science");
    let teacher1 = new Teacher('Ahmad', ["Maths", "AI", "Data Science"]);

    console.log(student1, teacher1);

    console.log(teacher1 instanceof Teacher);
    console.log(teacher1 instanceof User);

    if (teacher1 instanceof Student)
    {
        console.log('yep');    
    }
    else
    {
        console.log('nope');    
    }

    function doSomething(user)
    {
        if (user instanceof User)
        {
            return 5;    
        }
        return -1;
    }

    console.log(doSomething(teacher1));
    console.log(doSomething("teacher1"));
}