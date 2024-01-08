{
    function User(ismu, hobby)
    {
        this.name = ismu;
        this.hobby = hobby;
    }

    function newUser(name, interests)
    {
        let person =
        {
            pName: name,
            pInterests: interests
        }
        return person
    }
    
    let userA = new User("Faisal", ['reading', 'playing', 'studing']);

    let userB = new User("Haleemah", ['playing', 'learning']);

    console.log(userA, userB);

    userA.membership = "Gold";
    console.log(userA);
    
    let userC = newUser('Titi', ['fishing', 'studying', 'teaching']);
    console.log(userC);
}