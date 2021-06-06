// This is where the classes are stored
function Corporation(name) {
  this.name = name;
  
  // probably use this for let variables 
  Object.defineProperty(this, 'name', {
    get: function() {
      return this.name;
    },
    set: function(value) {
      this.name = value;
    }
  });
  // array of stores
  let stores = [];
  // info
}

const corp = new Corporation('Starbucks');
console.log(corp.name);

// Store parameter can be empty or by name/number?
function Store() {
  let address;
  let openingHours = [];
  let closingHours = [];
  let shiftTimes = [];
  // chat function
}

function Employer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  Object.defineProperty(this, 'name', {
    get: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    set: function(fName, lName) {
      this.firstName = fName;
      this.lastName = lName;

    }
  });
  let availability;
  let daysOff; // a function
}
const em = new Employer('Bob', 'Ross');
console.log(em.name);

function Employee(name) {
  this.name = name;
  let availability;
  let daysOff;
  let priority;
  let role;
}

// use these functions like
// let employee1 = new Employee(Bob);


function myFunction(x) {
  x.classList.toggle("change");
}