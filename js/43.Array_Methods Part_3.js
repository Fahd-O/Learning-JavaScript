{
    fishA = [12, 20, 30, 4, 0];
    console.log(fishA);

    fishB = [2,4,6,8,10];
    console.log(fishB);

    fishes = fishA.concat(fishB);
    console.log(fishes);
    console.log(fishA);
    console.log(fishB);

    console.log(fishA + fishB);

    console.log(fishes.includes(0));

    console.log(fishes.indexOf(10));

    console.log(fishA.join());
    console.log(fishA.join(""));
    console.log(fishA.join(' '));
    console.log(fishA.join(', '));
    console.log(fishA.join('days '));

    console.log(fishes.slice(2, 5));
    console.log(fishes.slice(6));

}