/*
  frontTimes
  Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, 
  or whatever is there if the string is less than length 3. Return n copies of the front.
  Examples : frontTimes('Chocolate', 2) → ChoCho
*/

function frontTimes(str, n){
  let a = str.slice(0, 3)
  // return a.repeat(n)
  console.log(a.repeat(n))
}

frontTimes('chocolate', 2)

