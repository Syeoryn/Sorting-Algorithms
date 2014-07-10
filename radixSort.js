// Radix sort is a noncomparative sort (often for integers)
// that sorts based on the value of each digit of each value.
// Starting with either the least significant digit or most significant digit,
// each value is placed into a bucket based on that value.  The values are then
// resorted based on the next digit, and so on until all m sorts have been completed
// where m is the length of the largest number
// Radix sort is a stable sort, meaning that when multiple values are placed in the same
// bucket, order is maintained from the previous order

var binaryRadixSort = function(array){
  var zeroes = [];
  var ones = [];
  var shifted;

  // Determine number of digits in largest number
  var max = Math.max.apply(null, array);
  var length = Math.log(max) / Math.log(2);

  // iterate over every element once for each digit in largest number
  for(var shiftBy = 0; shiftBy <= length; shiftBy++){
    // sort each value into zeroes or ones based on the current digit being examined
    for(var i = 0; i < array.length; i++){
      shifted = array[i] >> shiftBy;
      if(shifted % 2 === 0) {
        zeroes.push(array[i]);
      } else {
        ones.push(array[i]);
      }
    }
    // put zeroes and ones together, and continue
    array = zeroes.concat(ones);
    zeroes = [];
    ones = [];
  }

  return array;
}

