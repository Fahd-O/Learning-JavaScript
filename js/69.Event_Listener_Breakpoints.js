{
    let factorialFunc = f9 =>
    {
        for (riyal = f9-1; riyal > 1; riyal--)
        {
            f9 *= riyal;
        }
        console.log(f9);
    }

    let user = prompt('enter a number here to get its factorial');

    factorialFunc(user);

    document.getElementById("tesleem").onclick = () => {console.log("Greeted")};
    
    document.getElementById("tesleem").onmouseover = () => {console.log("Floated")};
}