/*
  stringSplosion
  Given a non-empty string like "Code" return a string like "CCoCodCode".
*/

function stringSplosion(str){
  let a = str.charAt(0)
  let b = str.slice(0, 2)
  let c = str.slice(0, 3)
  let d = str.slice(0)
    
  // return a + b + c + d
  console.log(a + b + c + d)
}

stringSplosion("Code")