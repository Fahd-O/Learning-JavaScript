{
    console.log(notDef);

    var notDef = 'host';



    doStuff();

    function doStuff()
    {
        console.log('printed stuffs...');
    }

    var doSomething = function()
    {
        console.log('this will not work');
    }
}