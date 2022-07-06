/*
  or35
  Return true if the given non-negative number 
  is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
  Examples : or35(3) → true
*/

function or35(n){
  if(n%3 == 0 || n%5 == 0) {
    // return true;
    console.log(true)
  } else {
    // return false;
    console.log(false)
  }
}

or35(3)