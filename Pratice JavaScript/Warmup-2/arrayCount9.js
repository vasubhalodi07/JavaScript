/*
  arrayCount9
  Given an array of ints, return the number of 9's in the array.
  Examples : arrayCount9([1,2,9]) → 1
*/

function arrayCount9(nums){
  var count = 0
  for(var i=0; i<nums.length; i++) {
    if(nums[i] == 9) {
      count++
    }
  }
  // return count
  console.log(count)
}

arrayCount9([1, 2, 9])
