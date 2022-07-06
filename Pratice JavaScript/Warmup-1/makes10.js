/*
  makes10
  Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
  Examples : makes10(9, 10) → true
*/

function makes10(a, b){
  if((a==10 && b!=10) || (b==10 && a!=10) || (a + b == 10) || (a==10 && b==10)) {
    //  return true;
    console.log(true)
  } else {
    // return false;
    console.log(false)
  }
}

makes10(9, 10)