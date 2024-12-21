/**
 * Counts the number of matchsticks used for the houses.
 * @param {Number} step
 * @returns {Number}
 * @example
 * countMatchsticksInHouses(1) => 6
 * countMatchsticksInHouses(2) => 11
 * countMatchsticksInHouses(4) => 21
 * countMatchsticksInHouses(0) => 0
 * See image here: https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
 * */
function countMatchsticksInHouses(step) {
  if (step === 0) {
    return 0;
  }
  if (!step || step < 0 || step % 1 !== 0) {
    throw new Error('step must be a positive integer');
  }
  return 6 + 5 * (step - 1);
}

/* The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00. */
/* Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. */
/* In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. */
/* The regexp should not match 123:456. */
const TIME_REGEX = /\d{2}:\d{2}/;

/**
 * @param {String} text
 * @returns {String}
 * @example
 * A word is on the loose and now has tried to hide amongst a crowd of tall letters!
 * Help write a function to detect what the word is, knowing the following rules:
 * The wanted word is in lowercase.
 * The crowd of letters is all in uppercase.
 * Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
 * findSecretWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
 * findSecretWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
 * findSecretWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
 * */
function findSecretWord(text) {
  if (text === undefined) {
    throw new Error('text must be defined');
  }
  const match = text.match(/[a-z]+/g);
  return !match ? '' : match.join('');
}

/**
 * Create a method in the Person class which returns how another person's age compares.
 * Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
 * return a sentence in the following format:
 * {other person name} is {older than / younger than / the same age as} me.
 * */
class Person {
  /**
   * @param {String} name
   * @param {Number} age
   * */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * @param {Object} other
   * @param {String} other.name
   * @param {Number} other.age
   * @returns {String}
   * @example
   * p1 = new Person("Samuel", 24)
   * p2 = new Person("Joel", 36)
   * p3 = new Person("Lily", 24)
   * p1.compareAge(p2) ➞ "Joel is older than me."
   * p2.compareAge(p1) ➞ "Samuel is younger than me."
   * p1.compareAge(p3) ➞ "Lily is the same age as me."
   * */
  compareAge(other) {
    if (!other || !other.name || !other.age) {
      throw new Error('other must have name and age');
    }
    const diff = this.age - other.age;
    if (diff === 0) {
      return `${other.name} is the same age as me.`;
    }
    return `${other.name} is ${diff < 0 ? 'older' : 'younger'} than me.`;
  }
}

/**
 * Write a function redundant that takes in a string `str` and returns a function that returns `str`.
 * @param {String} str
 * @returns {Function}
 * @example
 * const f1 = redundant("apple")
 * f1() ➞ "apple"
 *
 * const f2 = redundant("pear")
 * f2() ➞ "pear"
 *
 * const f3 = redundant("")
 * f3() ➞ ""
 * */
function redundant(str) {
  return () => str;
}

module.exports = {
  countMatchsticksInHouses,
  TIME_REGEX,
  findSecretWord,
  Person,
  redundant
}