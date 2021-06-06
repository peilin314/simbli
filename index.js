console.log("Hello World!");

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(updateName) {
    this._name = updateName;
  }
}


function myFunction(x) {
  x.classList.toggle("change");
}