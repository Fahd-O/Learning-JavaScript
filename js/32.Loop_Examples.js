{
    let surah;
    do
    {
        surah= prompt("What is the surah being recited ?");
    } while (surah.toLocaleLowerCase() !== "baqarah");

    for (let i = 10; i != -1; i--)
    {    
        console.log(i);
    }

    let noList = [7, 3, 4, 24, 13, 46, 19, 70, 33];
    for (let h = 0; h < noList.length; h++) {
        console.log(noList[h]);
        
    }

    let aFewWords = "these here are few words";
    let key = "a";
    for (let g = 0; g < aFewWords.length; g++)
    {
        if (aFewWords[g]===key)
        {
            console.log(aFewWords[g], "was found at index", g);
        }
    }
    

}