{
    function salam(input)
    {
        console.log(input);
        console.log(this);
    }

    salam(10);
    salam.call('assalaamu alaikum', 10);



    function maSalam(in1, in2)
    {
        console.log(in1, in2);
        console.log(this);
    }

    let tesleem = [5, 6, 7];

    maSalam.call("peace", 3, 2);

    maSalam.apply("peace", [3, 2]);
    maSalam.apply("peace", tesleem);
}