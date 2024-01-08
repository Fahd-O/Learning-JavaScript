{
    {
        let User =
        {
            active: true,
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
            teaches: 'physics'
        }
    
        Object.setPrototypeOf(student, User);
        Object.setPrototypeOf(corper, User);

        corper.active = false;
    
        console.log('student', student.sayTesleem());
        console.log('corper', corper.sayTesleem());
    }
}