{
    let myPhone = "Gionee";
    myPhone = myPhone.toUpperCase();//recall that premitives are immutable, meaning when we change the value of variables having premitive data types, we're actually deleting it and then assigning a new value to it. which is why I had to state here that the variable "myPhone" equals to "myPhone.toUpperCase" else, the output will remain the same in lower case
    console.log(myPhone)
}

//Premitives do not have Properties like Objects 