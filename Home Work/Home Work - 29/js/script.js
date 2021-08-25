function first(){
    return document.querySelector('.leng').innerHTML = 'Довжина аргументів: ' + arguments.length + '</br>'
}
first(1, 2, 3, 4, 5, 6, 7, 8)


let Auto = function(country, mark, model, motor, horsepower, fuel, year, color){
    this.country = country;
    this.mark = mark;
    this.model = model;
    this.motor = motor;
    this.horsepower = horsepower;
    this.fuel = fuel;
    this.year = year;
    this.color = color;
    this.about = function(){
        return 'Основні параметри автомобіля класу D' + '</br>' + 'Країна виробник: ' + this.country +
        '</br>' + 'Марка автомобіля: ' + this.mark + '</br>' + 'Модель: ' + this.model + '</br>' + 'Потужність двигуна: '+
        this.motor + '</br>' + 'Кінські сили: ' + this.horsepower + '</br>' + 'Тип пального: ' + this.fuel + '</br>' +
        'Рік виготовлення: ' + this.year + '</br>' + 'Колір автомобіля: ' + this.color + '</br>';
    }

}
let audi = new Auto ('Німечина', 'Audi', 'А4', '2.0', '225', 'Бензин', '2015', 'Чорний');
let bmw = new Auto ('Німечина', 'BMW', '3 series', '2.0', '181', 'Бензин', '2016', 'Синій');
let ford = new Auto ('США', 'Ford', 'Mondeo', '2.0', '185', 'Бензин', '2017', 'Срібний');

document.querySelector('.leng').innerHTML = audi.about() + '</br>' + bmw.about() + '</br>' + ford.about();






