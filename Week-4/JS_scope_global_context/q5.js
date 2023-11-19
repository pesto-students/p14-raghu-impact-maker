class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce () {
    return `My name is ${this.name}, I am ${this.age} years old, my gender is ${this.gender}, and my nationality is ${this.nationality}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return this.subject ? `I am studying ${this.subject}.` : `I don't study.`;
  }

}

c