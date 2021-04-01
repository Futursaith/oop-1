class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.language = language;
  }

  printInfo() {
    console.log(`firstName: ${this.firstName}`)
    console.log(`lastName: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`language: ${this.language}`)
  }

  canVote() {
    if (this.age >= 18) {
      return true;
    } else {
      return false;

    }
  }

  mostSkilledDev(objet) {
    const nbLangP1 = this.language.length;
    const nbLangP2 = objet.language.length;
    if (nbLangP1 > nbLangP2)
      return this.firstName
    else if (nbLangP1 < nbLangP2)
      return objet.firstName
    else
      return 'draw'
  }
}

const alice = new Human('Alice', 'Liddell', 28, ['Ruby, Shapir, Emeraude,']);
const bob = new Human('Bob', 'Lemon', 30, ['Js, Html, Solidity, Php, C++']);
const charlie = new Human('Charlie', 'Charlot', 8, ['Python, Cobra, Anaconda']);

alice.printInfo()
console.log(bob.canVote())
console.log(alice.mostSkilledDev(charlie))

