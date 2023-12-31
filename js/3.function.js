//there are four ways to create variables in javascript...

var fruit = "grapes"; //#1
console.log(fruit);

(function(){//#2
    //syntax for IIFE- Immediately Invoked Function Expression. which is used to store user defined vars (local var) to avoid conflict in the naming of the engine defined variables and the user defined vars. its like a list of local variables defined by user. however, if a data type is not attached to the variable created within this place, it gets placed in the window scope, which is a general list of global vars, so it is very important to put "data types" here, else its just gets placed back in the general window making it global
    var age = 5;
})();

// the "let" and "const" are an alternative to the IIFE

//#3
    let chickens = "birds"; //another way to create local variable function which are not global (i.e not in the window scope)
    console.log (chickens)
    chickens = "delicious";//value of variable can be changed
    console.log (chickens)


//#4
    const awater = "h20";//also another way to create local variables, similar to let, difference btw "let" and "const" is that value of variable here can't be changed because of the "const" attribute, just like in C++, however, values with the "let" attributes can be changed
    console.log(awater)


{
    //this is a block. an area marked by curly braces
    //a block restricts or marks the scope for whatever is within it (like variables, functions, e.t.c.), when with the attribute of "let" or "const" . meaning whatever is within it is not available outside it, and once the block of code finish running, it doesn't exist anymore I THINK. so whatever is within a BLOCK of code is only used within it, and data can then be outputed from it after all whatever may have been done within it

}

{
    let vegetables = "Carrots";//this is only accessible within this block and this block only, and nothing can be done with it outside it
    alert(vegetables + " are vegetables")
}

