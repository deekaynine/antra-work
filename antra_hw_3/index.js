// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

x = 32243;

const reverseNumber = (num) => {
  return num.toString().split("").reverse().join("");
};

console.log(reverseNumber(x));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

pali = "madam";

const palindrome = (stringParam) => {
  stringParam = stringParam.toLowerCase();
  for (let i = 0; i < stringParam.length; i++) {
    if (stringParam[i] !== stringParam[stringParam.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome(pali));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

combi = "dog";

const combinations = (stringParam) => {
  let final = [];
  for (let i = 0; i < stringParam.length; i++) {
    for (let j = i + 1; j <= stringParam.length; j++) {
      final.push(stringParam.slice(i, j));
    }
  }
  return final;
};

console.log(combinations(combi));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

alpha = "webmaster";
const alphabetical = (stringParam) => {
  return stringParam.split("").sort().join("");
};

console.log(alphabetical(alpha));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

capFirstLetter = "the quick brown fox";
const convertFirstWordToUppercase = (stringParam) => {
  return stringParam
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
};

console.log(convertFirstWordToUppercase(capFirstLetter));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

longest = "Web Development Tutorial";

const longestWord = (stringParam) => {
  let final = stringParam.split(" ");
  let longest = "";
  final.forEach((word) => {
    longest = longest.length < word.length ? word : longest;
  });
  return longest;
};

console.log(longestWord(longest));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
vowelParam = "The quick brown fox";

const vowels = (stringParam) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < stringParam.length; i++) {
    if (vowels.includes(stringParam[i])) {
      count++;
    }
  }

  return count;
};

console.log(vowels(vowelParam));
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
primeOrNot = 5;

const primeNumber = (num) => {
  if (num == 1) return false;
  if (num == 2) return false;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(primeNumber(primeOrNot));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
checker = "stringer";
const checkType = (args) => {
  return typeof args;
};

console.log(checkType(checker));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

const returnMatrix = (matrix) => {
  let row, col;
  for (row = 0; row < matrix; row++) {
    for (col = 0; col < matrix; col++) {
      if (row == col) console.log(1);
      else console.log(0);
    }
    console.log(" \n" + "\t");
  }
};

// console.log(returnMatrix(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
const passArr = [1, 2, 3, 4, 5];

const lowestAndSecond = (arr) => {
  let newArr = [];
  arr.sort();
  newArr.push(arr[1], arr[arr.length - 2]);

  return newArr;
};

console.log(lowestAndSecond(passArr));

// 12. Write a JavaScript function which says whether a number is perfect.
let perfectNumber = 28;
const perfectNum = (num) => {
  let sum = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum == num ? true : false;
};

console.log(perfectNum(perfectNumber));

// 13. Write a JavaScript function to compute the factors of a positive integer.
const positiveFactors = (num) => {
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) console.log(i);
  }
};

positiveFactors(17);

// 14. Write a JavaScript function to convert an amount to coins.

const moneyToCoin = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(moneyToCoin(left, coins));
    } else {
      coins.shift();
      return moneyToCoin(amount, coins);
    }
  }
};

console.log(moneyToCoin(571, [100, 50, 25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

const exponent = (b, n) => {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = b * total;
  }
  return total;
};

console.log(exponent(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

const uniqueCharacters = (string) => {
  console.log(...new Set(string));
  return [...new Set(string)].join("");
};

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

const findOccurences = (string) => {
  const tracker = {};

  string.split("").map((x) => {
    if (tracker[x]) {
      tracker[x] = tracker[x] + 1;
    } else {
      tracker[x] = 1;
    }
  });
  return tracker;
};

console.log(findOccurences("appleppp"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

const binarySearch = (val, arr) => {
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != val) {
    return false;
  }

  if (arr[mid] === val) return true;

  if (arr[mid] > val) {
    return binarySearch(val, arr.slice(0, mid));
  } else {
    return binarySearch(val, arr.slice(mid));
  }
};
console.log(binarySearch(20, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// 19. Write a JavaScript function that returns array elements larger than a number.

const largerThan = (target, arr) => {
  let result = arr.filter((x) => x > target);
  return result;
};

console.log(largerThan(2, [1, 2, 3, 4, 5]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const randomCode = (len) => {
  let res = "";
  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    res += text[Math.floor(Math.random() * text.length)];
  }
  return res;
};

console.log(randomCode(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

const allPossibleSubSet = (arr, length) => {
  let res = [],
    result;

  for (let x = 0; x < Math.pow(2, arr.length); x++) {
    result = [];
    i = arr.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arr[i]);
      }
    } while (i--);
    if (result.length >= length) {
      res.push(result);
    }
  }

  return res;
};

console.log(allPossibleSubSet([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

const specifiedOccurences = (string, letter) => {
  tracker = {};
  tracker[letter] = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      tracker[letter] += 1;
    }
  }
  return tracker[letter];
};

console.log(specifiedOccurences("apppple", "p"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

const firstNotRepeated = (string) => {
  const tracker = {};
  for (let i = 0; i < string.length; i++) {
    if (tracker[string[i]]) {
      tracker[string[i]] += 1;
    } else {
      tracker[string[i]] = 1;
    }
  }

  for (character in tracker) {
    if (tracker[character] == 1) {
      return character;
    }
  }
};

console.log(firstNotRepeated("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
};

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

const longestCountryName = (arr) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > res.length) {
      res = arr[i];
    }
  }
  return res;
};

console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

const longestSubString = (str) => {
  let longest = 0;
  let left = 0;
  let tracker = {};
  for (let right = 0; right < str.length; right++) {
    if (!tracker[str[right]]) {
      longest = Math.max(longest, right - left + 1);
    } else {
      if (tracker[str[right]] >= left) {
        left = tracker[str[right]] + 1;
      } else {
        longest = Math.max(longest, right - left + 1);
      }
    }
    tracker[str[right]] = right;
  }
  return longest;
};

console.log(longestSubString("abcdabccdee"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
const palindromeChecker = (str, left, right) => {
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    return str.slice(left + 1, right);
  }
};

const longestPalindrome = (str) => {
  if (str.length === 1) return str;

  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let checker = palindromeChecker(str, i, i);
  }

  longest = longest.length < checker.length ? checker : longest;

  return longest;
};

console.log(longestPalindrome("babad"), "question 27");

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

const passFunction = (cb) => {
  helloWorld();
};

const helloWorld = () => {
  console.log("hello world");
};

passFunction(helloWorld);

// 29. Write a JavaScript function to get the function name.

function getFunctionName() {
  console.log((() => arguments.callee.name)());
}
getFunctionName();
