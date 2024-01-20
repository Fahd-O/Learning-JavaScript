
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

    function Teacher(n, t)
    {
        this.name = n;
        this.teaches = t;
    }

    let student1 = new Student('Khalid', "Data Science");
    let teacher1 = new Teacher('Ahmad', ["Maths", "AI", "Data Science"]);

    console.log(student1, teacher1);
}