/**
 * Write a function to check if a string is empty
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 **/
function isStringEmpty(text) {
  // Your code here
  if (text == undefined) {
    throw new Error("text must be defined");
  }
  if (typeof text !== "string") {
    throw new Error("text must be string");
  }
  return text.trim().length === 0;
}
// try {
//   console.log(isStringEmpty(""));
//   console.log(isStringEmpty())

// } catch (error) {
//   console.log(error.message);
// }

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
  // Your code here
  if (text == undefined) {
    throw new Error("text must be defined");
  }
  if (typeof text !== "string") {
    throw new Error("text must be string");
  }
  if (text.length == 0) {
    throw new Error("text must have at least one character");
  }
  if (numberOfCharacters == undefined) {
    throw new Error("Please specify number of characters to extract");
  }
  if (typeof numberOfCharacters !== "number" || numberOfCharacters < 0) {
    throw new Error("numberOfCharacters must be a positive number");
  }
  return text.slice(0, numberOfCharacters);
}
// try {
//   console.log(truncateString("Hello world",4))
//   console.log(truncateString("Hello world",))

// } catch (error) {
//   console.log(error.message);

// }

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
  // Your code here
  if (text == undefined) {
    throw new Error("Text should have at least three characters");
  }

  if (typeof text !== "string") {
    throw new Error("Text should have at least three characters");
  }
  if (text.trim().length == 0) {
    throw new Error("Text should have at least three characters");
  }

  let arr = text.split(" ");
  let hashTag = "#";
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return (hashTag += newStr.charAt(0).toLowerCase() + newStr.slice(1));
}

// try {
//   console.log(createHashTag("i love javascript"));
//   console.log(createHashTag());
//   console.log(createHashTag("      "));
// } catch (error) {
//   console.log(error.message);
// }

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
  // Your code here
  let phoneNumberString = phoneNumber.toString();
  let result = "";
  if (phoneNumberString.length != 12 || phoneNumberString.length != 9) {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }
  if (phoneNumber == undefined || typeof phoneNumber != "number") {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }

  if (phoneNumberString.length == 12) {
    result += `+${phoneNumberString.slice(0, 3)} ${phoneNumberString.slice(
      3,
      5
    )} ${phoneNumberString.slice(5, 8)} ${phoneNumberString.slice(
      8,
      10
    )} ${phoneNumberString.slice(10, 12)}`;
  } else if (phoneNumberString.length == 9) {
    result += `+998 ${phoneNumberString.slice(0, 2)} ${phoneNumberString.slice(
      2,
      5
    )} ${phoneNumberString.slice(5, 7)} ${phoneNumberString.slice(7, 9)} `;
  }
  return result;
}
try {
  // console.log(formatPhoneNumber(9309478729));
} catch (err) {
  console.log(err.message);
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
  // Your code here
  let result = "";
  if (caseName == "camel") {
    let strArr = text.split(" ");
    let newStr = "";
    if (caseName == undefined) {
      throw new Error("not undifinded case name");
    }
    if (text == undefined) {
      throw new Error("not undifinded text");
    }
    for (let i = 0; i < strArr.length; i++) {
      newStr += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    result = newStr.charAt(0).toLowerCase() + newStr.slice(1);
  } else if (caseName == "kebab") {
    result = text.split(" ").join("-");
  } else if (caseName == "snake") {
    result = text.split(" ").join("_");
  }

  return result;
}
try {
  // console.log(changeTextCase("salom messi", "kebab"));
} catch (err) {
  console.log(err.message);
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
  return text.split(word).join(replacement);
}

try {
  // const bigText = "Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.";
  // const replacedWord = 'Pooh';
  // const replacementWord = 'Puff';
  // const result = replaceWordInText(bigText, replacedWord, replacementWord);
  // console.log(result);
} catch (err) {
  console.log(err.message);
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
  // Your code here
  let arr = text.split(" ");
  if (text == undefined) {
    throw new Error("Text should have at least three characters");
  }

  if (typeof text !== "string") {
    throw new Error("Text should have at least three characters");
  }

  if (text.trim().length == 0) {
    throw new Error("Text should have at least three characters");
  }
  if (!arr.includes("$")) {
    throw new Error("No matching price was found");
  }

  let fillterArr = arr.filter((text) => (text.includes("$") ? text : ""));
  console.log(fillterArr);

  let result = fillterArr.join().slice(1);
  return Number(result);
}
try {
  console.log(extractPriceFromText("salom"));
} catch (err) {
  console.log(err.message);
}

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber,
};
