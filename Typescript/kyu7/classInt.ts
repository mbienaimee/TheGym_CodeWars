declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => void;
}

export class Animal implements IAnimal {
  constructor(
    public name,
    public age,
    public legs,
    public species,
    public status
  ) {}
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

export class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

export class Dog extends Animal {
  constructor(name, age, status, public master: string) {
    super(name, age, 4, "dog", status);
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
