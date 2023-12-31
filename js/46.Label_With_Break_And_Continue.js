{
    let Haleemah = [
                        [1, 38, 40, 39, 41, 8],
                        [2, 35, 28, 31, 19, 38, 45, 88, 76],
                        [3, 60, 48, 55, 49, 59, 99]
                    ]

    for (let a = 0; a < Haleemah.length; a++)
    {
        for (let b = 0; b < Haleemah[a].length; b++) 
        {
            console.log(Haleemah[a][b]);
            if (Haleemah[a][b] === 28)
            {
                console.log('search key found !');
                break;  
            }  
        }
        console.log('~~~~~~~');
    }

    for (let a = 0; a < Haleemah.length; a++)
    {
        for (let b = 0; b < Haleemah[a].length; b++) 
        {
            console.log(Haleemah[a][b]);
            if (Haleemah[a][b] === 28)
            {
                console.log('search key found !');
                continue;  
            }
            console.log('key missing, search goes on...');
        }
        console.log('~~~~~~~');
    }

    for (let a = 0; a < Haleemah.length; a++)
    {
        for (let b = 0; b < Haleemah[a].length; b++) 
        {
            console.log(Haleemah[a][b]);    
        }
        console.log('~~~~~~~');
    }

    outerloop: for (let d = 0; d < Haleemah.length; d++) {
        for (let e = 0; e < Haleemah[d].length; e++) 
        {
            console.log(Haleemah[d][e]);

            if (Haleemah[d][e] === 88)
            {
                console.log('search found');

                break outerloop;
            }
            console.log('searching...');
            
        }

        console.log('outer for loop'); //this code is ignored with continue outerloop, it is not ignored with a break
        
    }
}