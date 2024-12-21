/**
 * Write a function to check if a string is empty 
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  if (text === undefined){
    throw new Error("text must be defined")
  }

  const cleanedText = text.trim();

  return cleanedText.length === 0;

}

/**
 * Write a function to truncate text
 * @param {String} text 
 * @param {Number} numberOfCharacters
 * @returns {String} 
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
function truncateString(text, numberOfCharacters) {
  if (typeof text !== 'string' || text.length === 0) {
    throw new Error ('text must have at least one character');
  }

  if (numberOfCharacters === undefined){
    throw new Error('Please enter specify number of characters to extract')
  }

  return text.slice(0, numberOfCharacters);

}

/**
 * Write a function to create social media post hash tag
 * @param {String} text 
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */
function createHashTag(text) {
  if (!text || text.trim().length < 3){
    throw new Error("text should have at least 3 characters");
  }

  const words = text.trim().toLowerCase().split(/\s+/);

  const resultWords = words.map((word, index) => {
    if (index === 0) {
      return word; //first word is fully lowercase
    } else{
      return word.charAt(0).toUpperCase()+word.slice(1);
    }
  });

  const resultString = resultWords.join("");

  return `#${resultString}`;

}

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber 
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber) {
    throw new Error('Phone number must be either 9 or 12 characters long');
  }
  const digits = String(phoneNumber);

  if (digits.length === 9) {

    const operatorCode = digits.slice(0, 2); // "99"
    const part1 = digits.slice(2, 5);        // "777"
    const part2 = digits.slice(5, 7);        // "66"
    const part3 = digits.slice(7, 9);        // "55"

    return `+998 ${operatorCode} ${part1} ${part2} ${part3}`;
  }
  else if (digits.length === 12) {

    const countryCode = digits.slice(0, 3);  // "998"
    const operatorCode = digits.slice(3, 5); // "99"
    const part1 = digits.slice(5, 8);        // "777"
    const part2 = digits.slice(8, 10);       // "66"
    const part3 = digits.slice(10, 12);      // "55"

    return `+${countryCode} ${operatorCode} ${part1} ${part2} ${part3}`;
  }
  else {
    // If it's not 9 or 12 digits, throw an error
    throw new Error('Phone number must be either 9 or 12 characters long');
  }
}

/**
 * Write a function that transforms text to different cases
 * @param {String} text 
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 * 
 */
function changeTextCase(text, caseName) {
  if (typeof text !== 'string' || !text.trim()) {
    throw new Error('Please provide valid text');
  }
  if (!['camel', 'kebab', 'snake'].includes(caseName)) {
    throw new Error("caseName must be one of 'camel', 'kebab', or 'snake'");
  }

  const words = text.trim().toLowerCase().split(/\s+/);

  switch (caseName) {
    case 'camel': {
      // first word is all lowercase, subsequent words are capitalized at the first letter
      const camelWords = words.map((word, index) => {
        if (index === 0) {
          return word; // fully lowercase for the first word
        } else {
          // capitalize first character, keep the rest lowercase
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      return camelWords.join('');
    }

    case 'kebab': {
      // join all words with a dash '-'
      return words.join('-');
    }

    case 'snake': {
      // join all words with an underscore '_'
      return words.join('_');
    }

    default:
      // should never reach here if we validated caseName earlier
      throw new Error('Invalid caseName');
  }
}

/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
function replaceWordInText(text, word, replacement) {
    if (typeof text !== 'string') {
      throw new Error("text must be a string");
    }
    if (typeof word !== 'string' || word.length === 0) {
      throw new Error("word must be a non-empty string");
    }

    if (typeof replacement !== 'string') {
      throw new Error("replacement must be a string");
    }
  
    const pattern = new RegExp(word, "g");
  
    return text.replace(pattern, replacement);
}

/**
 * Write a function to extract price in number format from the text
 * @param {String} text 
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  
  const pricePattern = /\$(\d+(\.\d+)?)/;
  
  const match = text.match(pricePattern);
  
  if (match) {
    return parseFloat(match[1]); 
  } else {
    return 'No matching price was found';
  }
}

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber
}