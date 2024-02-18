{
    let btn = document.getElementById('press');

    btn.onclick = function()
    {
        let module = document.createElement('li');

        console.log(module);

        module.appendChild
        (
            document.createTextNode
            (
                document.getElementById('putin').value
            )
        );

        let orderedList = document.getElementById('items');

        orderedList.appendChild(module);

        // remove list item
        let remBtn = document.getElementById('x');

        remBtn.onclick = function()
        {
            orderedList.removeChild(module);
        }

    }

   
}