function isPalindrome(word) {
  // Write your algorithm here
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedWord = word.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Reverse the cleaned string
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Check if the cleaned string is equal to its reverse
  return cleanedWord === reversedWord;
}

/* 
  Add your pseudocode here

  function isPalindrome(string)
  // Remove non-alphanumeric characters and convert to lowercase
  cleanedString = removeNonAlphanumeric(string).toLowerCase()

  // Reverse the cleaned string
  reversedString = reverse(cleanedString)

  // Check if the cleaned string is equal to its reverse
  if cleanedString == reversedString
    return true
  else
    return false

function removeNonAlphanumeric(string)
  // Replace all non-alphanumeric characters with an empty string
  cleanedString = string.replace(/[^a-z0-9]/gi, '')

  return cleanedString

function reverse(string)
  // Split the string into an array, reverse the array, and join it back into a string
  reversedArray = string.split('').reverse()
  reversedString = reversedArray.join('')

  return reversedString
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
