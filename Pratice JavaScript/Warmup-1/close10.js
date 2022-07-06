/*
  close10
  Given 2 int values, return whichever value is nearest to the value 10, 
  or return 0 in the event of a tie. Note that Math.abs(n) returns the 
  absolute value of a number.
  Examples : close10(8, 13) → 8
*/

function close10(a, b){
  const a1 = Math.abs(a - 10)
  const b1 = Math.abs(b - 10)
  if(a1 < b1) {
    // return a;
    console.log(a)
  } else if(a1 > b1) {
    // return b;
    console.log(b)
  } else {
    // return 0;
    console.log(0)
  }
}

close10(8, 13)
