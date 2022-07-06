/*
  parrotTrouble
  We have a loud talking parrot. The "hour" parameter is the current hour time in 
  the range 0..23. We are in trouble if the parrot is talking and the hour is before 
  7 or after 20. Return true if we are in trouble.
  Examples : parrotTrouble(true, 6) → true
*/

function parrotTrouble(talking, hour){
  if(hour > 0 && hour < 24) {
    if(talking == true && (hour < 7 || hour > 20)) {
      // return true;
      console.log(true)
    } else {
      // return false;
      console.log(false)
    }
  }
} 

parrotTrouble(true, 6)
