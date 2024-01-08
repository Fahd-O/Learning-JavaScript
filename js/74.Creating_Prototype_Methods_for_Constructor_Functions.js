{
    function User(name, interests)
    {
        this.name = name;
        this.interests = interests;
    }

    User.prototype.jamal = function()
    {
        console.log('my name is ' + this.name, this.interests);
    };

    let me = new User("Fatimah", ['cooking', 'eating', 'helping others']);
    let you = new User("Imran", ['playing', 'reading', 'exercising']);

    console.log(me, you);

    me.jamal();
    you.jamal();
}