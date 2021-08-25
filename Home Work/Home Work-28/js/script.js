let person = {
    firstName: "Maya",
    lastName: "Dos",
    language: " ",
    set lang(lang) {
        this.language = lang;
    },
    name: " ",
    set nameCat(nameCat) {
        this.name = nameCat;
    },
    "name Dog": "Profi",

}

person.nameCat = "Lapka";
person.lang = "UA";

delete person["name Dog"];

document.querySelector('.text').innerHTML = person.firstName + "<br>" + 
person.lastName + "<br>" + person.language + "<br>" + person.name;
