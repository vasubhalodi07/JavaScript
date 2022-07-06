/*
  delDel
  Given a string, if the string "del" appears starting at index 1, return a string where that "del" 
  has been deleted. Otherwise, return the string unchanged.
  Examples : delDel('adelbc') → abc
*/

function delDel(str){
  if(str.startsWith("del", 1)) {
    // return str.charAt(0) + str.substring(4, str.length)
    console.log(str.charAt(0) + str.substring(4, str.length))
  } else {
    // return str
    console.log(str)
  }
}

delDel('adelbc')
