{
    function maSalam(in1, in2)
    {
        console.log(in1, in2);
        console.log(this);
    }

    let shahr = maSalam.bind("peace", 3, 2);
    shahr();

    
}