// Q1

var eatsPlants = false;
var eatsAnimals = true;


// let omnivore = (!eatsPlants && eatsAnimals ? true : false);
// let carnivore = (eatsPlants && eatsAnimals ? true : false);
// let herbivore = (!eatsPlants && !eatsAnimals ? true : false);
// let undefinedtype = (eatsPlants && !eatsAnimals ? true : false);

// console.log("is it omnivore: " + omnivore);
// console.log("is it carnivore: " + carnivore);
// console.log("is it herbivore: " + herbivore);
// console.log("is it undefined: " + undefinedtype);

let animals=(eatsPlants== true & eatsAnimals==true )? 'the Anmile is omnivore':
    (eatsPlants== false & eatsAnimals==true) ? 'the Anmile is carnivore':
    (eatsPlants== true & eatsAnimals==false) ? 'the Anmile is herbivore':'the Anmile is undefined';
console.log(animals);


// Q2

let musicians = 0;

if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else if (musicians > 4) {
    console.log("this is a large group");
}


// Q3

var room = "billiards room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room == 'ballroom') {
    weapon = "poison";
} else if (room == 'gallery') {
    weapon = 'trophy'
} else if (room == 'billiards room') {
    weapon = 'pool stick'
} else if (room == 'dining room') {
    weapon = 'knife'
}

if (room == 'dining room') {
    suspect = "Mr. Parkes";
} else if (room == 'gallery') {
    suspect = 'Ms. Van Cleve'
} else if (room == 'billiards room') {
    suspect = 'Mrs. Sparr'
} else if (room == 'ballroom') {
    suspect = 'Mr. Kalehoff '
}

if (room == 'dining room' && suspect == "Mr. Parkes") {
    solved = true;
} else if (room == 'gallery' && suspect == "Mr. Van Cleve") {
    solved = true;
} else if (room == 'billiards room' && suspect == "Mrs. Sparr") {
    solved = true;
} else if (room == 'ballroom' && suspect == "Mr. Kalehoff") {
    solved = true;
} else {
    console.log("nothing");

}

if (solved) {
    console.log(`${suspect}did it in the ${room} with the${weapon}`);
}

// Q4
var balance = -325;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (isActive) {
        if (balance % 2) {
            console.log('the balance is positive number');
        } else {
            console.log('the balance is odd number');
        }
    }
}

// Q5

let flavor = "vanilla";
let vessel = "cone";
let toppings = "sprinkles";
if ((flavor == "vanilla" || flavor == "chocolate") && (vessel == "cone" || vessel == "bowl") && (toppings == "sprinkles" || toppings == "peanuts")) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
}
