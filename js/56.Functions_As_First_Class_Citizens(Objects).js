    // a function can be equated to a variable, ...can be stored in a...
   let fish = function product (n, p)
                {
                    let total = 1; 
                    for(r = 0; r < p; r++)
                    {
                        total *= n;
                    }
                    return total;
                }

    console.log(fish(5, 3));


                
    //you can add a function to an array
    function halal (x, v)
    {
        let t = x + v;
        return t;
    }
    
    let Adunni = [halal];
    console.log(Adunni[0](4, 2));



    //functions may be put in an object of a variable, i.e be made the property of an object of a variable
    function doStuff(w,r)
    {
        return w + r * w;
    }
    
    let myCousins = 
    {
        riceAndBeans: doStuff
    }

    console.log(myCousins.riceAndBeans(1, 2));



    //functions may also be given descriptions
    fish.described = "This function can be used to get the value of a number raise to a particular number";
    
    console.log(fish.described);



    //a function may also take in another function as a parameter, known as a callback function
    function callBackExample (callBack)
    {
        return callBack(2, 10);
    }

    console.log(callBackExample(fish));


    
    //a function can also return another function
    function babyFunc()
    {
        console.log('a new baby is born somewhere');
    }

    function motherFunc()
    {
        return babyFunc();
    }

    motherFunc();