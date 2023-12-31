{
    let points = [0,0,2,24,1,19,15,3,4,5,32,49,50,5,6,9,8,7,61,64,84,83,90,98,70,741,150];
    points.sort();
    console.log(points);

    points.sort(function (a, b){return a - b});
    console.log(points);

    let pointed = points;
    pointed.reverse();
    console.log(pointed);
    console.log(points);

    pointed.fill(-3, 0, pointed.length);
}