/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var str1 = str.toLowerCase()
  // var str2 = str1.reverse(); string cannot be reversed
  var arr = str1.split(''); //str2 becomes array
  var str2 = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i] >= 'a' && arr[i] <= 'z' && arr[i]!=' '){
      str2.push(arr[i]);
    }
  }

  // console.log(str2);
  var low = 0;
  var high = str2.length-1;
  while(low<=high){
    if(str2[low] != str2[high]){
        return false;
    }else{
      low++;
      high--;
    }
  }

  return true;
}

module.exports = isPalindrome;
