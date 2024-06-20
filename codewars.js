/* 1. spliting Strings in pairs */
function splitString(str) {
    let result = [];
    
    for (let i = 0; i <= str.length - 1; i += 2) {
      // Get the pair of characters
      let pair = str[i] + (str[i + 1] || '_');
      result.push(pair);
    }
    return result;
  }
  // Example usage
  console.log(splitString('abc'));
  console.log(splitString('abcdef'));
 
// 2. converts dash/underscore delimited words into camel casing
function toCamelCase(str) {
  // split the string
  let sentence = str.split(/[\s_-]+/);

  for (let i = 0; i < sentence.length; i++) {
    // If it's not the first word, capitalize the first letter
    if (i > 0 && sentence[i].length > 0) {
      sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1).toLowerCase();
    }
    else if (i === 0) {
      // Preserve the first word as is
      sentence[i] = sentence[i];
    }
  }
  return sentence.join(''); //join all the split sentences
}
// Example usage
console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase("The_Stealth_Warrior"));


// 3. Arranging numbers in telephone pattern
function createPhoneNumber(numbers) {
  const phoneNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`;
  
  return phoneNumber;
}

// Example usage
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output: "(123) 456-7890"

// 4. Arranging arrays in categories
function openOrSenior(data) {
  let grade = [];
  let years, handicap;

  for (let i = 0; i < data.length; i++) {
    years = data[i][0];
    handicap = data[i][1];
  
    // Determine the Catergory
    if (years >= 55 & handicap > 7) {
      grade.push("Senior");
    }
    else {
      grade.push("Open");
    }
  }
  return grade;
}
// Example Usage
const input = ([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);
const output = openOrSenior(input);
console.log(output);
