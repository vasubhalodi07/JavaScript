/*
  arrayFront9
  Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
  Examples : arrayFront9([1,2,9,3,4]) → true
*/


function arrayFront9(nums){
  var count = 0
  for(var i=0; i<4; i++) {
    if((nums[i] == 9)) {
      count ++;
    }
  }
  if(count > 0) {
    return true
  } else {
    return false
  }
}

arrayFront9([1, 2, 9, 3, 4])