{
    //there is just one data type for all numbers, whether whole numbers, decimal...

    let x = 10; //numbers are internally 64 bit floating point numbers, known as double precision floatint point numbers
    x = 5.5// and float is just 32 bits having less storage space compared to numbers
    
    console.log(Number.MAX_SAFE_INTEGER) // value= 9007199254740991, anything higher than this is not guaranteed
    console.log(Number.MIN_SAFE_INTEGER) //vice versal

    let q = 9007199254740991;
    console.log(Number.isSafeInteger(q))//used to check if a number value is within the safe range of numbers that can safely be represented in JavaScript, prints "true" if within range, else "false"

    let g = 9007199254740992;
    console.log(Number.isSafeInteger(g))

    let things = 9007199254740991;
    console.log(Math.pow(things, 200))//output is infinity

    console.log(console.log() + 2)//outputs "NaN" short for "Not a Number". stands for when there is a mathematical operation btw numbers and non-numbers

    console.log(1/0)//outputs "infinity"
    console.log(1/-0)//prints "negative infinity", no error message unlike some...  

}