{
    
    let changeable = [7];

    changeable.push(98, 70, 58);
    console.log(changeable);

    changeable.pop();
    console.log(changeable);

    changeable.unshift(12,90,45);
    console.log(changeable);

    changeable.shift();
    console.log(changeable);

    changeable[2] = 77;
    console.log(changeable);

    changeable.splice(2,3);
    console.log(changeable);

    changeable.splice(2, 0, 44, 88, 79, 55);
    console.log(changeable);

    changeable.splice(2, 4, 11, 22, 33, 44);
    console.log(changeable);
}