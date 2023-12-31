{
    let miscNumList = [1,2,3,4,5,6,7,8,9,10];

    miscNumList.length = 20;
    miscNumList[25] = 20;

    let count = 0;
    let total = 0;

    for(i = 0; i < miscNumList.length; i++)
    {
        if(miscNumList[i] !== undefined)
        {
            count++;
            total += miscNumList[i];
        }
    }

    let avg = total/count;
    console.log(avg);
}