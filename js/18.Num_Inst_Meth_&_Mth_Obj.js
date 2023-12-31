{
    let a = 6543210;
    console.log(a.toExponential(4));

    var b = 2500.057
    console.log("$"+b.toFixed(2));

    let c = 5999999
    console.log(c.toLocaleString())

    var d = 3.1428
    console.log(d.toPrecision(3))
    var d2 = 2500
    console.log(d2.toPrecision(2))

    var abs = Math.abs(-36); //36
    var goUp = Math.ceil(.00000001); //1
    var goDown = Math.floor(.99999); //0
    var powerUp = Math.pow(2, 3); //8
    var roundUp = Math.round(4.9); //5
    var roundDown = Math.round(5.1); //5
    var sign = Math.sign(-Infinity); //-1 (false)
    var getWholeNum = Math.trunc(454.99999); //4

    console.log(abs, goUp, goDown, powerUp, roundUp, roundDown, sign, getWholeNum);
}