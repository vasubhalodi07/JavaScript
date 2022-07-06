/*
  mixStart
  Return true if the given string begins with 
  'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.
  Examples : mixStart('mix snacks') → true
*/

function mixStart(str){
  if(str.includes("ix")) {
    // return true;
    console.log(true)
  } else {
    // return false;
    console.log(false)
  }
}

mixStart("mix snacks")
