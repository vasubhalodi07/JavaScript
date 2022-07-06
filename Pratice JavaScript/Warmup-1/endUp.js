/*
  endUp
  Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, 
  uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.
  Examples : endUp('Hello') → HeLLO
*/

function endUp(str){
  if(str.length < 3) {
    // return str.toUpperCase()
    console.log(str.toUpperCase())
  } else {
    const a = str.slice(str.length-3)
    const cap = a.toUpperCase()
    
    // return str.slice(0, str.length-3) + cap
    console.log(str.slice(0, str.length-3) + cap)
  }
}

endUp('Hello')
