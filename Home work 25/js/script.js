let cars = ['Audi', 'Lada', 'Mazda', 'Reno', 'Ford'],
    names = ['Artem', 'Anna', 'Igor', 'Viktor', 'Petro'],
    colors = ['Orange', 'Blue', 'Black', 'White', 'Green'];

function clickOne (){
    textShow1 = document.querySelector('.textShow1');
    for (let i of cars) {textShow1.innerHTML += i + ' '};
};

function clickTwo (){
    textShow2 = document.querySelector('.textShow2');
    for (let i in names) {textShow2.innerHTML += i  + ' ' + names[i]}
};

function clickThree (){
    textShow3 = document.querySelector ('.textShow3');
    let j;

    for (let i in colors){
        j = i
        j++;
    }
    textShow3.innerHTML += j + ' ';
}