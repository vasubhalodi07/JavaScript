/*
  diff21
  Given an int n, return the absolute difference between n and 21, except return 
  double the absolute difference if n is over 21.
  Examples : diff21(19) → 2
*/

function diff21(n){
  if((21-n) >= 0) {
    // return 21-n;
    console.log(21-n)
  } else {
    const a = (21-n)*2
    // return Math.abs(a)
    console.log(Math.abs(a))
  }
}

diff21(19)
