/*
  nearHundred
  Given an int n, return true if it is within 10 of 100 or 200. 
  Note: Math.abs(num) computes the absolute value of a number.
  Examples : nearHundred(93) → true
*/

function nearHundred(n){
  if((n >= 90 && n <= 100 || n >= 100 && n <= 110) || (n >= 190 && n <= 200 || n >= 200 && n <= 210)){
    // return true;
    console.log(true)
  } else {
    // return false;
    console.log(false)
  }
}

nearHundred(93)
