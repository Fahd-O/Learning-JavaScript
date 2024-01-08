{
    fish.calculated = [];
    function fish (n, p)
                {
                    let total = 1; 
                    for(r = 0; r < p; r++)
                    {
                        total *= n;
                    }
                    fish.calculated.push(total);
                    console.log(fish.calculated);
                    return total;
                }
    
    fish(2, 5);
    fish(3, 3);
    fish(2, 3);
    fish(3, 2);

    waterMelon.calculated = {};
    function waterMelon (w, m)
                {
                    let stringVersion = w + "^" + m;
                    console.log("String Version: " + stringVersion);
                    let total = 1; 
                    for(n = 0; n < m; n++)
                    {
                        total *= w;
                    }
                    waterMelon.calculated[stringVersion] = total;
                    console.log(waterMelon.calculated);
                    return total;
                }
    
    waterMelon(2, 10);
    waterMelon(2, 10);
    waterMelon(4, 2);
    waterMelon(5, 2);
}