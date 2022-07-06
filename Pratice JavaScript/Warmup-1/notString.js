/*
  notString
  Given a string, return a new string where "not " has been added to the front. However, 
  if the string already begins with "not", return the string unchanged.
  Example : notString('candy') → not candy
*/

function notString(str){
  const abc = "not" + " " + str
  if(abc.slice(0,3) == str.slice(0,3)) {
    // return str
    console.log(str)
  } else {
    // return abc
    console.log(abc)
  }
}

notString('candy')
