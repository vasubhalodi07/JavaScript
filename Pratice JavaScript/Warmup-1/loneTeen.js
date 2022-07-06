/*
  loneTeen
  We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
  Given 2 int values, return true if one or the other is teen, but not both.
  Examples : loneTeen(13, 99) → true
*/

function loneTeen(a, b){
    if ((a >=13 && a <= 19) && (b < 13 || b > 19))
      // return true;
      console.log(true)
    else if ((b >=13 && b <= 19) && (a < 13 || a > 19))
      // return true;
      console.log(true)
    else
      // return false;
      console.log(true)
}

loneTeen(13, 99)
