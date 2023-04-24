function isPalindrome(word) {
  // Write your algorithm here
  if(word == null || word === undefined) return false;
  
  let length = word.length;
  if (length === 0 || length === 1) {
    return true;
  }
  if (word[0] === word[length - 1]) {
    return isPalindrome(word.slice(1, length - 1) );
  } 
  return false;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I googled 'algorithms that can tell if a word is a palindrome', 
  and this is the code I got. I was trying to find a code that each word
  and tell me whether it is a palindrome or not. I'm not sure where in this code
  the array was placed so that I could access it. So I declare the words too?
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
