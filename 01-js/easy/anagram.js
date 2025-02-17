/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var str1 = str1.toLowerCase();
  var str2 = str2.toLowerCase();
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  // console.log(arr1);
  arr1.sort();
  arr2.sort();
  for(var i=0; i<arr1.length; i++){
    if(arr1[i]!=arr2[i] ){
      return false;
    }
  }

  return true;
  
}

module.exports = isAnagram;
