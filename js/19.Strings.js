{
    let uName = "Abu Masjid";

    console.log(uName);
    console.log(uName[4]);

    let name1 = "Muadh bin Jabbal";
    console.log("The name of class three is: " + name1);

    let name2 = "Abdullahi bin Mas'oud";
    let name3 = "'Umaru bin Khattob";

    console.log("Of the companions of the Prophet (Salaa Allahu alayhi wasalam) were " + name1 +", "+ name2 + " and also " + name3);
    //below is a reconstruct of the above using another style.
    console.log(`Of the companions of the Prophet (Salaa Allahu alayhi wasalam) were ${name1}, ${name2} and also ${name3} `);

    var lines = "This is line one\nthis is line two\nthis is line three";
    console.log(lines)

    let breaks = "This is on line 1\
    , this is a continuation of line 1\
    , this is also a continuation of line 1";
    console.log(breaks);

    console.log(uName.length);
}