{
    let kamiSafe = () => this;

    let lontor = kamiSafe.bind("salam");
    console.log(lontor()); //value of arrow function 'this' remains the same.
}