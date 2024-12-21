const {
  formatPhoneNumber,
  truncateString,
  replaceWordInText,
  isStringEmpty,
  extractPriceFromText,
  createHashTag,
  changeTextCase,
} = require("../src/exercise_1.js");
const { expect } = require("chai");

describe("Exercise @1", () => {
  describe("isStringEmpty Function", () => {
    it("isStringEmpty('abc'); => false", () => {
      expect(isStringEmpty("abc")).to.equal(false);
    });

    it("isStringEmpty(''); => true", () => {
      expect(isStringEmpty("")).to.equal(true);
    });

    it("isStringEmpty('   '); => true", () => {
      expect(isStringEmpty("  ")).to.equal(true);
    });

    it("isStringEmpty(); => throws error", () => {
      expect(() => {
        isStringEmpty();
      }).to.throw("text must be defined");
    });
  });

  describe("truncateString Function", () => {
    it("truncateString('Hello World', 2); => 'He'", () => {
      expect(truncateString("Hello World", 2)).to.equal("He");
    });

    it("truncateString('Hello world'); => throws error \"Please specify number of characters to extract\"", () => {
      expect(() => {
        truncateString("Hello world");
      }).to.throw("Please specify number of characters to extract");
    });

    it("truncateString(''); => throws error \"text must have at least one character\"", () => {
      expect(() => {
        truncateString("");
      }).to.throw("text must have at least one character");
    });
  });

  describe("createHashTag Function", () => {
    it("createHashTag('Hello World'); => '#helloWorld'", () => {
      expect(createHashTag("Hello World")).to.equal("#helloWorld");
    });

    it("createHashTag('i love javascript'); => '#iLoveJavascript'", () => {
      expect(createHashTag("i love javascript")).to.equal("#iLoveJavascript");
    });

    it("createHashTag(''); => throws error 'Text should have at least three characters'", () => {
      expect(() => {
        createHashTag("");
      }).to.throw("Text should have at least three characters");
    });

    it('createHashTag(); => throws error "Text should have at least three characters"', () => {
      expect(() => {
        createHashTag();
      }).to.throw("Text should have at least three characters");
    });

    it("createHashTag('   '); => throws error 'Text should have at least three characters'", () => {
      expect(() => {
        createHashTag("   ");
      }).to.throw("Text should have at least three characters");
    });
  });

  describe("formatPhoneNumber Function", () => {
    it("formatPhoneNumber(998997776655); => '+998 99 777 66 55'", () => {
      expect(formatPhoneNumber(998997776655)).to.equal("+998 99 777 66 55");
    });

    it("formatPhoneNumber(997776655); => '+998 99 777 66 55'", () => {
      expect(formatPhoneNumber(997776655)).to.equal("+998 99 777 66 55");
    });

    it('formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"', () => {
      expect(() => {
        formatPhoneNumber(7776655);
      }).to.throw("Phone number must be either 9 or 12 characters long");
    });

    it('formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"', () => {
      expect(() => {
        formatPhoneNumber(777665544332211);
      }).to.throw("Phone number must be either 9 or 12 characters long");
    });

    it('formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"', () => {
      expect(() => {
        formatPhoneNumber();
      }).to.throw("Phone number must be either 9 or 12 characters long");
    });
  });

  describe("changeTextCase Function", () => {
    it("changeTextCase('Hello World', 'camel'); => 'helloWorld'", () => {
      expect(changeTextCase("Hello World", "camel")).to.equal("helloWorld");
    });

    it("changeTextCase('Hello World', 'kebab'); => 'hello-world'", () => {
      expect(changeTextCase("Hello World", "kebab")).to.equal("hello-world");
    });

    it("changeTextCase('Hello World', 'snake'); => 'hello_world'", () => {
      expect(changeTextCase("Hello World", "snake")).to.equal("hello_world");
    });
  });

  describe("replaceWordInText Function", () => {
    const bigText =
      "Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) " +
      "is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English " +
      "illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story " +
      "commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by " +
      "a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, " +
      "and a bear they had viewed at London Zoo.";

    const expectedResult =
      "Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) " +
      "is a fictional anthropomorphic teddy bear created by English author A. A. Milne and " +
      "English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's " +
      "story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by " +
      "a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a " +
      "bear they had viewed at London Zoo.";

    it("should replace Pooh with Puff", () => {
      const replacement = "Puff";
      expect(replaceWordInText(bigText, "Pooh", replacement)).to.equal(
        expectedResult
      );
    });
  });

  describe("extractPriceFromText Function", () => {
    it("extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32", () => {
      const text = "Apple price in market is $2.32 per kg now";
      expect(extractPriceFromText(text)).to.equal(2.32);
    });

    it("extractPriceFromText('Apple price in market is $5 per kg now'); => 5", () => {
      const text = "Apple price in market is $5 per kg now";
      expect(extractPriceFromText(text)).to.equal(5);
    });

    it("extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'", () => {
      const text = "There were no apples left in the shop";
      expect(extractPriceFromText(text)).to.equal(
        "No matching price was found"
      );
    });
  });
});
