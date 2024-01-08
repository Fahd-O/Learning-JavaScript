{
    try
    {
        thisFunctionIsFakeAndIsMeantToCauseError();
    }
    catch(error)
    {
        console.log(error);
    }
    finally //NOTE - this would always execute no matter what
    {
        console.log('asgfsg');
    }



    function somethingDo()
    {
        throw { error: "Something broke", code: -1};
    }

    try
    {
        somethingDo();
    }
    catch(error)
    {
        console.log(error);
        console.log('water is falling from the sky');
    }
    finally
    {
        console.log("it's raining");
    }
}