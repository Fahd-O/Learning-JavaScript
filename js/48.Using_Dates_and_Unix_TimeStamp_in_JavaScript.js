{
    let myDate = new Date(2023, 10, 11);
    console.log(myDate);

    let time = Date.now();
    console.log(time);



    let startTime = Date.now();
    let x = 0;
    for (let h = 0; h < 100000000; h++)
    {
        x += h;
    }
    let endTime = Date.now();
    console.log('final value of x is',x);
    let timeTaken = -startTime + endTime;
    console.log('Total time taken to finish calculation is',timeTaken);


    let before = new Date(1445, 6, 17);

    let after = new Date(1445, 9, 1);

    let noOfMilPerDay = 1000 * 60 * 60 * 24;

    let days = ((after - before)/noOfMilPerDay);
    console.log(days, 'days to year 1445 Ramadhaan as at the time of writing this code...');

}