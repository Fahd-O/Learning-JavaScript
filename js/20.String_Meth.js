{
    let fish = "delicious";
    //gets character at position 4
    console.log(fish.charAt(4))

    console.log(fish.toUpperCase())

    console.log(fish.concat(" is what you are likely to say after tasting a fried Fish."))


    let webContent = "it is black and white and read all over, water, school, house, place, hold, can, past, tax, cash, air, hydrogen, move, shelter, tree, sand, cloud, race, food, good, too, boat, soak, earth.";
    var searchItem1 = "air";
    var searchItem2 = "nature";

    //below is used to search through content of a string using search keywords.
    console.log(webContent.includes(searchItem1))
    console.log(webContent.includes(searchItem1, 99))
    console.log(webContent.includes(searchItem2))

    //shows index position where search keyword is encountered 
    console.log(webContent.indexOf(searchItem1));

    //search starts from index 99, not found, returns -1
    console.log(webContent.indexOf(searchItem1, 99));
    console.log(webContent.indexOf(searchItem2));//-1 means false, not found...

    let searchItem3 = "a";
    //manipulation to get the index of the second occurrence of search keyword.
    console.log(webContent.indexOf(searchItem3, webContent.indexOf(searchItem3)+1));
    console.log(webContent.lastIndexOf(searchItem3));
}