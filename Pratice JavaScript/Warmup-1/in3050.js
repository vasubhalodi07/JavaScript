/*
  in3050
  Given 2 int values, return true if they are both in the range 30..40 
  inclusive, or they are both in the range 40..50 inclusive.
  Examples : in3050(30, 31) → true
*/

function in3050(a, b){
  if((a >= 30 && a <= 40 && b>=30 && b<=40) || (a >= 40 && a <= 50 && b>=40 && b<=50)) {
    // return true;
    console.log(true)
  } else {
    // return false;
    console.log(false)
  }
}

in3050(30, 31)
