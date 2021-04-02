const { Human } = require('./classInfo');

//ma section Human
const alice = new Human('Alice', 'Liddell', 28, [
  'Javascript',
  'Python',
  'PHP'
]);
const bob = new Human('Bob', 'Lemon', 30, ['Java', 'C++']);
const charlie = new Human('Charlie', 'Charlot', 8, [
  'Go',
  'Cobol',
  'Kotlin',
  'Java',
  'Angular'
]);

charlie.printInfo();
console.log(bob.canVote());
console.log(alice.mostSkilledDev(charlie));

//ma section Point

const p1 = new Point(3, 2);
const p2 = new Point(2, 3);
console.log(p1.distance(p2));

const { Point } = require('./point')


const p1 = new Point(1, 2)
const p2 = new Point(10, 11)


console.log((p1.distance(p2)).toFixed(2))


console.log(canVote(alice))