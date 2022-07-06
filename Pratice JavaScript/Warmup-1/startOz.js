/*
  startOz
  Given a string, return a string made of the first 2 chars (if present), 
  however include first char only if it is 'o' and include the second only 
  if it is 'z', so 'ozymandias' yields 'oz'.
  Examples : startOz('ozymandias') → oz
*/

function startOz(str){
  const string = str.slice(0,2)
  if(string.startsWith('o') && string.endsWith('z')) {
    // return 'oz';
    console.log('oz')
  } else if(string.startsWith('o') && !string.startsWith('z')) {
    // return 'o';
    console.log('o')
  } else if(!string.endsWith('o') && string.endsWith('z')) {
    // return 'z';
    console.log('z')
  } else {
    // return "";
    console.log("")
  }
}

startOz('ozymandias')