{
    let list = document.getElementsByTagName("ol");

    console.log(list);

    let ourList = list[0];

    console.log(ourList);

    ourList.onmouseover = function()
    {
        console.log('Mouse Over');
        ourList.childNodes[1].childNodes[0].nodeValue ='House';

        document.getElementById('netUs').innerHTML = 'Network Us';
    }

    let btn = document.getElementById("push");

    btn.onmouseenter = () => btn.innerHTML = 'revealed';

    btn.onmouseleave = function()
    {
        btn.innerHTML = 'Hover Over Me';
        ourList.remove();
    }
}