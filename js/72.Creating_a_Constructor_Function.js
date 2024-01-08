{
    function User(ismu, hobby)
    {
        this.name = ismu;
        this.hobby = hobby;
    }

    let userA = new User("Faisal", ['reading', 'playing', 'studing']);
    let userB = new User("Haleemah", ['playing', 'learning']);
    console.log(userA, userB);
    userA.membership = "Gold";
    console.log(userA);
}