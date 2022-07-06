/*
  sumDouble
  Given two int values, return their sum. Unless the two 
  values are the same, then return double their sum.
  Examples : sumDouble(1, 2) → 3
*/

function sumDouble(a, b){
  if(a == b) {
    // return (a*2) + (b*2)
    console.log((a*2) + (b*2))
  } else {
    // return a + b;
    console.log(a + b)
  }
}

sumDouble(1, 2)