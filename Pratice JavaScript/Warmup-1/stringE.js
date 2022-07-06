/*
  stringE
  Return true if the given string contains between 1 and 3 'e' chars.
  Example : stringE('Hello') → true
*/

function stringE(str){
  let count = 0;
  for(var i=0; i< str.length; i++) {
    if(str[i] == 'e') {
      count++;
    }
  }
  
  if(count == 1 || count==3) {
    //  return true
    console.log(true)
  } else {
    // return false
    console.log(false)
  }
}

stringE('Hello')
