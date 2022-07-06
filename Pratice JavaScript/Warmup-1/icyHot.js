/*
  icyHot
  Given two temperatures, return true if one is less than 0 and the other is greater than 100.
  Examples : icyHot(120, -1) → true
*/

function icyHot(temp1, temp2){
  if((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)) {
    // return true
    console.log(true)
  } else {
    // return false
    console.log(false)
  }
}

icyHot(120, -1)
