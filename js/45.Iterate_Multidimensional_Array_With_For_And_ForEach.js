{
    let madarasah = [
                        [1, 38, 40, 39, 41, 42],
                        [2, 35, 28, 31, 19, 38, 45, 88, 76],
                        [3, 60, 48, 55, 49, 59, 99]
                    ]

    for (let c = 0; c < madarasah.length; c++)
    {
        console.log(madarasah[c]);    
    }                

    for (let a = 0; a < madarasah.length; a++)
    {
        for (let b = 0; b < madarasah[a].length; b++) 
        {
            console.log(madarasah[a][b]);    
        }
        console.log('~~~~~~~');
    }

    console.log('this does the same thing as the for loop above with less drama');
    madarasah.forEach(function (tomato)
    {
        console.log(tomato);
    })

    madarasah.forEach(function (tomato)
    {
        tomato.forEach(function (onion)
        {
            console.log(onion);
        })
        console.log('less drama')
    })
    
}