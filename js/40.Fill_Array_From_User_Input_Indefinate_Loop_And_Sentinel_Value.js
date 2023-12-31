{
    let numAry = [];

    while(true)
    {
        input = prompt('Enter a number here to add it the array of numbers. Enter the letter "s" or nothing to terminate the loop')

        if(input === 's' || input === null)
        {
            break;
        }

        numAry.push(Number(input));
        console.log(numAry);
    }
}