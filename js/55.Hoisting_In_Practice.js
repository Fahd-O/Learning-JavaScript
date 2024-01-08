{
    console.log(notDef);

    var notDef = 'host';



    doStuff(); //this function executes despite only being declared afterwards

    function doStuff()
    {
        console.log('printed stuffs...');
    }


    // this wouldn't work because the function has now been put in a variable
    doSomething();

    var doSomething = function()
    {
        console.log('this will not work');
    };

    console.log(letOrConst);
    let letOrConst = 7;
}