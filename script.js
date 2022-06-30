let x = 10;
x += 5;

document.write(x);

let FirstName = "Riaz";
let LastName = "Turhan";
let FullName = FirstName + " " + LastName;
document.write(FullName);

const cars = [ "BMW", "VOLVO", "Corola"]; //this is array
document.write(cars[1]); // call arry one element

if (x > 20) {
    document.write("It's Small")
} else {
    document.write("It's Big")
}

function carsValu (prize){ //function use and if and else use inside the function element
     console.log(prize + " " + "Doller I pay you")
    if (prize > 100 ){
       console.log("you will buy this car");
    }else if (prize < 100){
        console.log("you can not buy this car")
    }
}

carsValu (1020); //function call

function Timedate (){
    document.getElementById("demo").innerHTML = Date();
}

let mongo = 123.44;
console.log(typeof mongo.toExponential(2)); //number methods
Number(mongo);
console.log(mongo);

const Fruits = ["Mango", "Orange", "Bananna"]
console.log(Fruits);
console.log(Fruits[0]);
// Fruits[0]= "Nothing";
console.log(Fruits);

function forUse (value){
    console.log(value);
}
Fruits.forEach(forUse); // this methods work like for loop
console.log("finished");

Fruits.push("Lemone"); //new element added 
console.log(Fruits[3]); 

const person = []; //If you use named indexes, JavaScript will redefine the array to an object.After that, some array methods and properties will produce incorrect results.
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;
person[0];   
console.log(person);  //Arrays are a special kind of objects, with numbered indexes.

console.log(Array.isArray(person)); //solution for array and object ideantifi 
console.log(person instanceof Array); //another way

const fruitsIteam = ["Banana", "Orange", "Apple", "Mango"];
fruitsIteam.splice(2, 0, "Lemon", "Kiwi"); //The splice() method adds and/or removes more than one value in array elements. 
console.log(fruitsIteam);

const AllFruits = Fruits.concat(fruitsIteam); // this concat property use to add 2 array together.
console.log(AllFruits);

Fruits.sort();
console.log(Fruits); //this methods sorts an array alphabetically
console.log(typeof Fruits); //this methods sorts an array alphabetically

fruitsIteam.reverse()
console.log(fruitsIteam);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
        return a - b
    });
    console.log(points); // if we dclrd function inside sort then array to be aline and Use the same trick to sort an array descending b - a//
   
    const Numbers = [45, 31, 20, 14, 2, 3, 9]

    function myNumbers(value, index , array){
        console.log(value)
        console.log(index)
        console.log(array)
        console.log("==============") //use for.each lteration 
    }

    //use map() lteration on array

    Numbers.forEach(myNumbers);

    function newArray(value){
        return value * 2;
    }
    const NewArray = Numbers.map(newArray);
    console.log(NewArray);

// array filter() leteration

    function NeedBigNum(value){
        return value < 20;
    }
    const FilterNum = Numbers.filter(NeedBigNum);
    console.log(FilterNum);