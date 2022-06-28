let x = 10;
x += 5;

document.write(x);

let FirstName = "Riaz";
let LastName = "Turhan";
let FullName = FirstName + " " + LastName;
document.write(FullName);

const cars = [ "BMW", "VOLVO", "Corola"];
document.write(cars[1]);

if (x > 20) {
    document.write("It's Small")
} else {
    document.write("It's Big")
}
function carsValu (prize){
     console.log(prize + " " + "Doller I pay you")
    if (prize > 100 ){
       console.log("you will buy this car");
    }else if (prize < 100){
        console.log("you can not buy this car")
    }
}

carsValu (1020);

function Timedate (){
    document.getElementById("demo").innerHTML = Date();
}

let mongo = 123.44;
console.log(typeof mongo.toExponential(2));
Number(mongo);
console.log(mongo);

const Fruits = ["Mango", "Orange", "Bananna"]
console.log(Fruits);
console.log(Fruits[0]);
Fruits[0]= "Nothing";
console.log(Fruits);

function forUse (value){
    console.log(value);
}
Fruits.forEach(forUse);
console.log("finished");