{
    {
        let student =
        {
            active: true
        }
    
        let teacher =
        {
            subject: ['mechanics', 'AI', 'data science']
        }

        let corper =
        {
            teaches: 'physics'
        }
    
        Object.setPrototypeOf(teacher, student);
        Object.setPrototypeOf(corper, student);

        corper.active = false;
    
        console.log(teacher.active);
        console.log(corper.active);
    }
}