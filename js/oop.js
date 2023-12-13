// Get the output elements from the HTML document
const userOutput = document.getElementById('output'); // Updated variable name
const hamburgerOutput = document.getElementById('output2'); // Updated variable name

// STEP 1a: Create a new person using a regular function
function createNewPerson(name) {
    var person = {}; // Updated variable name
    person.name = name;
    person.greetings = function () {
        alert(`Hello! I am ${this.name}`);
    };
    return person;
}

// STEP 1b: Use the console to create new people and invoke the .greeting() method
var user1 = createNewPerson("User1"); // Updated variable name
var user2 = createNewPerson("User2"); // Updated variable name

// STEP 2a: Use constructor functions for a more concise approach
function User(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName} ${this.name.lastName} of age ${this.age} of gender ${this.gender} are ${this.interests}.`;
    }
}

// STEP 2b: Use the console to create users using the 'new' keyword and invoke the .greeting() method
var user3 = new User("User3", "LastName3", 25, "Female", ["reading", "painting", "traveling"]);

// STEP 3a: Build the complete constructor for the User object
// Include name (first and last), age, gender, interests, bio (function), and greeting (function).

// STEP 3b: Instantiate a new User based on the above constructor

// STEP 3c: Attempt to access the various properties of user1 using the console.
// user1['age']
// user1.interests[1]
// user1.bio()

// STEP 4a: Use the Object() constructor to create an object (e.g., car)
var myCar = new Object(); // Updated variable name

// STEP 4b: Add various properties and methods to 'myCar'
myCar.brand = "Toyota"; // Updated car brand
myCar.color = "Blue"; // Updated car color
myCar.price = 40; // Updated car price

// STEP 4c: Change some of the properties of 'myCar' in the console, then invoke the myCar.fun() function

// STEP 5a: Use the create() method to create another object based on 'myCar'
var anotherCar = Object.create(myCar);

console.log(anotherCar.brand);

// Define a constructor function for creating Hamburger objects
function Hamburger(buns, garnishes, cheeses, sauces, meat, pattyCount, extras) {
    this.buns = buns;
    this.garnishes = garnishes;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.meat = meat;
    this.pattyCount = pattyCount;
    this.extras = extras;
}

// Extend the prototype of Hamburger to include a describe method
Hamburger.prototype.describe = function () {
    return `This hamburger is made with a ${this.buns} bun, ${this.pattyCount} ${this.meat} patty(ies), ` +
        `${this.cheeses.join(' and ')} cheese(s), garnished with ${this.garnishes.join(', ')}, ` +
        `topped with ${this.sauces.join(' and ')} sauce(s), and ${this.extras.join(', ')} on the side.`;
};

// Create an instance of Hamburger
var myHamburger = new Hamburger(
    'whole grain',
    ['lettuce', 'tomato', 'onion'],
    ['cheddar cheese', 'swiss cheese'],
    ['mayo', 'mustard'],
    'beef',
    2,
    ['pickles', 'ketchup', 'fries']
);

// Get the description of the hamburger and log it to the console
var hamburgerDescription = myHamburger.describe();
console.log(hamburgerDescription);

// Display the description on the HTML page
hamburgerOutput.textContent = hamburgerDescription;
