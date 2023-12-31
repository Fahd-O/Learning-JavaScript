{
    let place = prompt("Where is the place ? ");

    let score = place === "Osun" ? 10 : 0; //the Tenary operator is used here... this whole expression "place === "Osun" ? 10 : 0" is the Tenary operator, or should I say Tenary Operation. if the value of place (entered by a user in this case) is "Osun", the output of the tenary operation would be 10, else it would be 0. like a kind of game

    console.log("You scored", score, "points from your attempt !");

    if (place === "Osun")//doing the same thing using ifelse statement
    {
        console.log("You scored 10 points from your attempt !");    
    } else
    {
        console.log("You scored 0 point from your attempt !");
    }

    // the tenary opeeator or operation also accepts statements not only numbers
    place === "Osun" ? console.log("10 points !") : console.log("0 point !");
}