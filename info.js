const alice = {
  firstName: 'Alice',
  lastName: 'Liddel',
  age: 28,
  language: ['Ruby, Shapir, Emeraude,']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Js, Html, Solidity, Php, C++']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Python, Cobra, Anaconda'],

}

const prinInfo = (objet) => {
  console.log(`firstName: ${objet.firstName}`)
  console.log(`lastName: ${objet.lastName}`)
  console.log(`age: ${objet.age}`)
}

const canVote = (objet) => {
  if (objet.age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canVote(alice));
console.log(canVote(bob));
console.log(canVote(charlie));
console.log();

const mostSkilledDev = (obj1, obj2) => {
  const nbLangP1 = obj1.language.length;
  const nbLangP2 = obj2.language.length;
  if (nbLangP1 > nbLangP2)
    return obj1.firstName
  else if (nbLangP1 < nbLangP2)
    return obj2.firstName
  else
    return 'draw'
}


console.log(mostSkilledDev(alice, bob));
console.log(mostSkilledDev(charlie, alice));
