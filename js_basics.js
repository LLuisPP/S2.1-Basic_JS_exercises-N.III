
// Exercici 1
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma.
// Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
let a = 6;
let b = 2;
let arrow_function;

arrow_function = (a, b) => a + b;

console.log(`Variable values are a = ${a} and b = ${b}`);
console.log("Result of ARROW FUNCTION (=>) = ", arrow_function(a, b));

// Exercici 2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que
// no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
let random_number;

function randomNumber() {
    return(Math.floor(Math.random() * 100));
};

random_number = randomNumber();

console.log("Result of RANDOM_NUMBER = ", random_number);

// Exercici 3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat 
// name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació
// que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
class person {
    constructor (name) {
        this.name = name;
    }
};

function greet() {
    () => console.log(`Hola ${this.name} bienvenido !`);
}

let name1 = new person('Juan')
name1.greet();
