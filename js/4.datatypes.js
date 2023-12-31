//javascript is a dynamically typed language, i.e. doesn't require stating the data type of variables. contrasted with statically typed language which requires stating data types of variables

//PRIMITIVE DATA TYPE: there are 6 primitive data types viz:1.string 2.number 3.boolean 4.null 5.undefined 6.symbol. primitives are immutable

//1.String: is a sequence of characters between two quotes, whether double or single quotes
{
    let myName = 'Fahd';
    let myNickName = "Abu Masjid";
}
//3.Boolean: is a true or false value

//4.Null: similar to undefined however in this case it is the value given to a variable by the user not the computer, so it still stands for nothing, absence of a value

//5.Undefined: is the type the computer gives to a variable which has not be initialized to anything yet by default, similar to null


    let fish;


{
    let x = 5;
    let b = "10";

    x += b;
    console.log(x);//output is 510, due to type casting in javascript, the number "5" gets converted into a string and then it just concatenates or joins them together
}

//OBJECT DATA TYPE: is a collection of key value pairs

//Basic Structures of Objects. good for grouping variables together
let someone = {
    name: "Fahd",
    age: 21,
    favFood: "Amala + Ewedu + Chicken Soup",
    //keys ^         values ^
   //keys are a.k.a. property or members or field

   //functons can also be within objects. and are a.k.a. "methods" are unique to Objects, so there is no function or objects in "Primitive Data Types"
   fun:function(){
       console.log("Waaaaawuuu!");
   }
}

someone.fun();
console.log(so meone.name);

let today = new Date();
let grades = [99, 98, 95, 96, 100]

//anything outside the premitive datatype is an object, just as line "47" & "48" are also objects









