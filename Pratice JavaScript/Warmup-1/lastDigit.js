/*
  lastDigit
  Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. 
  Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.
  Examples : lastDigit(7, 17) → true
*/

function lastDigit(a, b) {
    const a1 = a.toString()
    const b1 = b.toString()
    
    if(a1.slice(a1.length - 1) == (b1.slice(b1.length - 1))) {
      // return true
      console.log(true)
    } else {
      // return false
      console.log(false)
    }
}

lastDigit(7, 17)
