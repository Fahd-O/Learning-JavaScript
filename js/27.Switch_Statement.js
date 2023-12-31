{
    let cookFood = prompt("Name a raw food:");
    var cookFoodC = cookFood.toLowerCase();
    switch(cookFoodC)
    {
        case "plantain":
        case "egg":
            console.log("fry");
            break;
        case "rice":
        case "beans":
            console.log("boil");
            break;
        case "groundnut":
            console.log("roast");
            break;
        case "cake":
            console.log("bake");
            break;
        case "chicken":
            console.log("berbeque");
            break;
        default:
            console.log("anyway is a way, boil, fry, roast, bake, heat, just get it cooked")
    }
}