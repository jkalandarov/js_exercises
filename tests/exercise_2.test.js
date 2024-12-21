const { expect } = require("chai");
const {
  countMatchsticksInHouses,
  TIME_REGEX,
  findSecretWord,
  Person,
  redundant
} = require('../src/exercise_2');

describe('Exercise @2', () => {
  describe('countMatchsticksInHouses Function', () => {
    it('countMatchsticksInHouses(1) => 6 ', () => {
      const result = countMatchsticksInHouses(1);
      expect(result).to.equal(6);
    });

    it('countMatchsticksInHouses(2) => 11 ', () => {
      const result = countMatchsticksInHouses(2);
      expect(result).to.equal(11);
    });

    it('countMatchsticksInHouses(4) => 21 ', () => {
      const result = countMatchsticksInHouses(4);
      expect(result).to.equal(21);
    });

    it('countMatchsticksInHouses(0) => 0 ', () => {
      const result = countMatchsticksInHouses(0);
      expect(result).to.equal(0);
    });
  });

  describe('Time Regex', () => {
    it('should return 09:00', () => {
      const text = 'Breakfast at 09:00 in the room 123:456.';
      const result = text.match(TIME_REGEX)[0];
      expect(result).to.equal('09:00');
    });

    it('should return 25:99', () => {
      const text = 'Breakfast at 25:99 in the room 12:456.';
      const result = text.match(TIME_REGEX)[0];
      expect(result).to.equal('25:99');
    });
  });

  describe('findSecretWord Function', () => {
    it('should find "cat"', () => {
      const text = "UcUNFYGaFYFYGtNUH";
      const result = findSecretWord(text);
      expect(result).equals('cat');
    });

    it('should find "burglar"', () => {
      const text = "bEEFGBuFBRrHgUHlNFYaYr";
      const result = findSecretWord(text);
      expect(result).equals('burglar');
    });

    it('should find "embezzlement"', () => {
      const text = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment";
      const result = findSecretWord(text);
      expect(result).equals('embezzlement');
    });
  });

  describe('Person class', () => {
    const p1 = new Person("Samuel", 24);
    const p2 = new Person("Joel", 36)
    const p3 = new Person("Lily", 24)

    it('Joel is older than me.', () => {
      const result = p1.compareAge(p2);
      expect(result).to.equal('Joel is older than me.');
    });

    it('Samuel is younger than me.', () => {
      const result = p2.compareAge(p1);
      expect(result).to.equal('Samuel is younger than me.');
    });

    it('Lily is the same age as me.', () => {
      const result = p1.compareAge(p3);
      expect(result).to.equal('Lily is the same age as me.');
    });
  });

  describe('redundant Function', () => {
    it('should return function', () => {
      const result = redundant('apple');
      expect(typeof result).to.equal('function');
    });

    it('should return "apple"', () => {
      const result = redundant('apple');
      expect(result()).to.equal('apple');
    });

    it('should return ""', () => {
      const result = redundant('');
      expect(result()).to.equal('');
    });
  });
});