// Object and all related methods

const Person = {
  name: "reine",
  speak: function () {
    console.log("normal person speak ");
  },
  age: 20,
};

console.log(Person);
console.log(Person.speak());

//methods
//1.assign()
const value1 = {
  name: "marie",
  age: 49,
};
const valu2 = {
  location: "kigal",
};

const full = Object.assign(value1, valu2);
console.log(full);
