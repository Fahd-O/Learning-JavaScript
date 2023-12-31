{
    let something = "This is a variable containing words that are random and are not really meaninful just trying to populate the content of this string with something hence the name something.";
    //outputs content based on specified range
    console.log(something.substring(5, 18));
    //outputs content from specified start till amount of stated character
    console.log(something.substr(5, 30));
    //outputs content from specified start. amount of outputed character is equal to difference between the two parameters
    console.log(something.slice(10, 15));

    var casing = "wHaT iS CaMeL cAsE";
    console.log(casing);
    console.log(casing.toUpperCase());
    console.log(casing.toLowerCase());

    let uN = "  \t \n\n   Fahd ibn Sadiq \n\n\n\n \t";
    console.log(uN);
    //removes leading or trailing white space. useful for form validation
    console.log(uN.trim());
    console.log(uN.trimRight());//now deprecated. replaced with "trimEnd"
    console.log(uN.trimEnd());
    console.log(uN.trimLeft());//now deprecated. replaced with "trimStart"
    console.log(uN.trimStart());


    var tahleel = "la ilaha illa llah\n";
    console.log(tahleel.repeat(5000));

    console.log(something.split(" "))
}