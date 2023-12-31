{
    let fruit = prompt("Give me the name of a fruit:")
    let fruit2 = prompt("Give me the name of a second fruit:")
    var fruitCon = fruit.toLowerCase()
    var fruitCon2 = fruit2.toLowerCase()
    if(fruitCon == "banana" || fruitCon == "pineapple")
    {
        console.log("Common fruit")
    }
    else if (fruitCon == "chery" && fruitCon2 == "mango")
    {
        console.log("Seasonal fruit")
    }
    else if (fruitCon == "mango" && fruitCon2 == "chery")
    {
        console.log("Seasonal fruit")
    }
    else if (fruitCon != "orange" && fruitCon != "cashew")
    {
        console.log("Name of fruit entered is likely to be 'Watermelon' or 'Grape'")
    }
    else
    {
        console.log("Name of fruit entered may be 'Orange' or 'Cashew', else it is most likely to be an exotic fruit.")
    }
}