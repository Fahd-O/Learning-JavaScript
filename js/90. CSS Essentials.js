{
    let stunBtn = document.getElementById('stun');

    stunBtn.style.backgroundColor = 'orange';

    stunBtn.onclick = function()
    {
        stunBtn.style.backgroundColor = 'white'    
        stunBtn.disabled = true;
    }
}