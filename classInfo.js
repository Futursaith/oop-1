// class declaration
class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.language = language;
  }
  printInfo() {
    console.log(`first name: ${this.firstName}`);
    console.log(`last name: ${this.lastName}`);
    console.log(`age: ${this.age}`);
    console.log(`prog language: ${this.language}`);
  }

  canVote() {
    if (this.age >= 18) {
      return true;
    } else {
      return false;
    }
  }

  mostSkilledDev(person) {
    const array1 = this.language.length;
    const array2 = person.language.length;

    if (array1 > array2) {
      return this.firstName;
    } else if (array1 < array2) {
      return person.firstName;
    } else {
      return 'draw';
    }
  }
}

exports.Human = Human;