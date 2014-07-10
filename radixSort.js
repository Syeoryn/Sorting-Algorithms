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

  var max = Math.max.apply(null, array);
  var length = Math.log(max) / Math.log(2);

  for(var shiftBy = 0; shiftBy <= length; shiftBy++){
    for(var i = 0; i < array.length; i++){
      shifted = array[i] >> shiftBy;
      if(shifted % 2 === 0) {
        zeroes.push(array[i]);
      } else {
        ones.push(array[i]);
      }
    }
    array = zeroes.concat(ones);
    zeroes = [];
    ones = [];
  }

  return array;
}

