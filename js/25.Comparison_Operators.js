{
    let uAge = prompt("How old are you ?")
    if(uAge == 19)
    {
        console.log("You're Nineteen")
    }
    else if(uAge <= 18)
    {
        console.log("You're a Teenager or a child")
    }
    else if(uAge >= 18)
    {
        console.log("You're either a Teen or an Adult")
    }

    let uAge2 = prompt("How old are you again ?")
    if(uAge2 > 19)
    {
        console.log("You're an Adult")
    }
    else if(uAge2 < 13)
    {
        console.log("You're a Child")
    }
    else
    {
        console.log("You're a Teenager")
    }
}