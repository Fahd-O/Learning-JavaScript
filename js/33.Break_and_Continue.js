{
    //this would output at every instance where the key is found within the string lenght
    let aFewWords = "these here are few words";
    let key = "e";
    for (let g = 0; g < aFewWords.length; g++)
    {
        if (aFewWords[g]===key)
        {
            console.log(aFewWords[g], "was found at index", g);
        }
    }

    //this would output only at the first instance where the key is found because of the "break;" keyword.
    //the break keyword is used to exit out of the loop or function we are currently in.
    let aFewWords2 = "these here are few words";
    let key2 = "r";
    for (let f = 0; f < aFewWords2.length; f++)
    {
        if (aFewWords2[f]===key2)
        {
            console.log(aFewWords2[f], "was found at index", f);
            break;
        }
    }

    //this outputs every character in the string below except the vowel letters specified in the "if statement"
    let someWords = "whoever believes in Allah and the day of recompense, let him speak good words, or keep quiet";
    for (let e = 0; e < someWords.length; e++)
    {
        if (someWords[e]==='a' || someWords[e]==='e' || someWords[e]==='i' || someWords[e]==='o' || someWords[e]==='u')
        {
            continue;
        }
        console.log(someWords[e], "was found at index", e);
    }

}