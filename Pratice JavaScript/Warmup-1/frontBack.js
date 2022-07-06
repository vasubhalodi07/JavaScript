/*
  frontBack
  Given a string, return a new string where the first and last chars have been exchanged.
  Examples : frontBack('code') → eodc
*/

function frontBack(str){
  if(str.length <= 1) {
    // return str
    console.log(str)
  } else {
    let a = str.charAt(0)
    let b = str.slice(str.length - 1)
    // return b + str.substring(1, str.length-1) + a
    console.log(b + str.substring(1, str.length-1) + a)
  } 
}

frontBack('code')
