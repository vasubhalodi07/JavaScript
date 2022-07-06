/*
  missingChar
  Given a non-empty string and an int n, return a new string where 
  the char at index n has been removed. The value of n will be a valid index of a 
  char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
  Examples : missingChar('kitten', 1) → ktten
*/

function missingChar(str, n){
  if(n >=0 && n <= str.length) {
    // return str.replace(str.charAt(n), '')
    console.log(str.replace(str.charAt(n), ''))
  } else {
    // return false
    console.log(false)
  }
}

missingChar('kitten', 1)