/*
  hasTeen
  We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.
  Examples : hasTeen(13, 20, 10) → true
*/

function hasTeen(a, b, c){
  if((a >= 13 && a <= 19) ||
     (b >= 13 && b <= 19) ||
     (c >= 13 && c <= 19)) {
    // return true
    console.log(true)
  } else {
    // return false
    console.log(false)
  }
}

hasTeen(13, 20, 10)
