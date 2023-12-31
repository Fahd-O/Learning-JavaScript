{
    function radix(r, d)
    {
        let output = 1;
        for (let e = 0; e < d; e++)
        {
            output *= r;
        }
        return output;
    }

    console.log(radix(2, 3));
}