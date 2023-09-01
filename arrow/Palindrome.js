let  inputArray = ["racecar", "hello", "level", "world", "deified"];
let  isPalindrome = str => {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  let  findPalindromes = arr => arr.filter(isPalindrome);
   
  let  palindromes = findPalindromes(inputArray);
  
  console.log("Palindromes:", palindromes);
  
