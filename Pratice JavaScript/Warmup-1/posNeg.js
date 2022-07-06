/*
  posNeg
  Given 2 int values, return true if one is negative and one is positive. 
  Except if the parameter "negative" is true, then return true only if both are negative.
  Examples : posNeg(1, -1, false) → true
*/

function posNeg(a, b, negative){
  if(a<0 && b<0 && negative==true ||
     a>0 && b<0 && negative==false||
     a<0 && b>0 && negative==false) {
    // return true
    console.log(true)
  } else {
    // return false
    console.log(false)
  }
}

posNeg(1, -1, false)