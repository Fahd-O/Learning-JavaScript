{
    let list = document.getElementsByTagName("li");

    console.log(list[0].childNodes[0]);

    if(list[0].nodeType === 1)
    {
        console.log('element');
    }
    else if(list[0].nodeType === 3)
    {
        console.log('text');
    }
}