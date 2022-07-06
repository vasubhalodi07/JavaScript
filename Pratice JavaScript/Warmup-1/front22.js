/*
  front22
  Given a string, take the first 2 chars and return the string with
  the 2 chars added at both the front and back, so 'kitten' yields 
  'kikittenki' chars are there.
  Examples : front22('kitten') → kikittenki
*/

function front22(str){
  const slicing = str.slice(0,2)
  // return slicing + str + slicing
  console.log(slicing + str + slicing)
}

front22('kitten')
