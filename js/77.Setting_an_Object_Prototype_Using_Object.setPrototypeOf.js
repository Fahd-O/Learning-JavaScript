{
    let student =
    {
        active: true
    }

    let teacher =
    {
        subject: ['mechanics', 'AI', 'data science']
    }

    Object.setPrototypeOf(teacher, student);

    console.log(teacher);
    console.log(teacher.active);
}