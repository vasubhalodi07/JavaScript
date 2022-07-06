/*
  backAround
  Given a string, take the last char and return a new string with the last char 
  added at the front and back, so 'cat' yields 'tcatt' The original 
  string will be length 1 or more.
  Examples : backAround('cat') → tcatt
*/

function backAround(str){
  const last = str.charAt(str.length - 1)
  return last + str + last
}

backAround('cat')
