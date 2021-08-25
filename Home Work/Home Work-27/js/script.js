// Завдання 1

let showHide = document.getElementById("showHide");
let demo = document.getElementById("demo");
showHide.onclick = function() {
  if (demo.style.display == "block") {
    demo.style.display = "none";
  } else {
    demo.style.display = "block";
  }
}



// Завдання 2
let car ={
    mark: 'Audi',
    model: 'A4',
    color: 'black'
}

car.year = '2016';
car.motor = '2.0'

delete car.model;
delete car.motor;

document.querySelector('.lengthArr').innerHTML = Object.keys(car).length;
 
car = {};
console.log(car);

// Завдання 3
let finish;
let arr = [3, 4, 55, 34, 80, 8, 1, 99]
let out = arr.map(function(num){
    return finish = num / 5
})
document.querySelector('.mathMap').innerHTML = out;

//Завдання 4

let maxArr = [2, 55, 34, 2, 67, 11, 90, 1]
   
function maxNum(){
    return Math.max(...maxArr)
}
document.querySelector('.maxMath').innerHTML = maxNum();













