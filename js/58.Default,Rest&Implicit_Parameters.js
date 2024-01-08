{
    function agbara(l, t = 2) //t = 2 gives the parameter t a default value of 2, so if only one arguement is passed to the function as done below, the t is given a default of 2.
    {
        aropo = 1;
        for(n = 0; n < t; n++)
        {
            aropo *=  l;
        }
        return aropo;
    }

    console.log(agbara(3));



    function agbaraKeji(a, b, ...ziyaadah) // extral arguements passed into the fucntion can be identified and used by using the "...ziyaadah". it can be given any name apart from ziyaadah, it is basically a variable. it is an array data type.
    {
        console.log(ziyaadah);
        aropo = 1;
        for(n = 0; n < b; n++)
        {
            aropo *=  a;
        }
        return aropo;
    }

    console.log(agbaraKeji(3, 3,4,42,1));



    function alkabir(awwal, ...shayun)
    {
        for(a = 0; a < shayun.length; a++)
        {
            if(awwal < shayun[a])
            {
                awwal = shayun[a];
            }
        }
        return awwal;
    }
    console.log(alkabir(2,3,4,5,8,9,4,23,17,34,78,6));
}