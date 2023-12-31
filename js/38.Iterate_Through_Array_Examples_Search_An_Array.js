{
    let someNums =[2, 30, 12, 19, 20, 34, 44, 1, 50, 70, 100, 1001, 7, 4];

    let maxNum = someNums[0];

    for(i = 0; i < someNums.length ; i++)
    {
        if(maxNum < someNums[i])
        {
            maxNum = someNums[i];
        }
    }
    console.log('The highest number in the Array is ' + maxNum + ' found at index ' + i);
}