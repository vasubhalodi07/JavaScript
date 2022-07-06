/*
  everyNth
  Given a non-empty string and an int N, return the string made starting with char 0, and 
  then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
  Examples : everyNth('Miracle', 2) → Mrce
*/

function everyNth(str, n){
  let st1='',i;
  for(i=0; i<str.length;i=i+n) {
    st1 = st1.concat(str.charAt(i));
  }
  // return st1;
  console.log(st1)
}

everyNth('Miracle', 2)