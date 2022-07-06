/*
  front3
  Given a string, we'll say that the front is the first 3 chars of the string. 
  If the string length is less than 3, the front is whatever is there. 
  Return a new string which is 3 copies of the front.
  Examples : front3('Java') → JavJavJav
*/

function front3(str){
  const string = str.slice(0,3)
  // return string.repeat(3)
  console.log(string.repeat(3))
}

front3('Java')
