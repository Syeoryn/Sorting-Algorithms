// Radix sort is a noncomparative sort (often for integers)
// that sorts based on the value of each digit of each value.
// Starting with either the least significant digit or most significant digit,
// each value is placed into a bucket based on that value.  The values are then
// resorted based on the next digit, and so on until all m sorts have been completed
// where m is the length of the largest number
// Radix sort is a stable sort, meaning that when multiple values are placed in the same
// bucket, order is maintained from the previous order


var binaryRadixSort = function(array){
  if(!array.length) return [];
  var negatives = [];
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
      if(shiftBy === 0 && array[i] < 0){
        negatives.push(array[i]);
        console.log('negative!')
      } else if(shifted % 2 === 0) {
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
  if(isNaN(length)){
    negatives = array;
  }
  negatives = negatives.map(function(num){return num * -1})
  negatives = binaryRadixSort(negatives);
  negatives = negatives.map(function(num){return num * -1}).reverse();
  return negatives.concat(array);
}

var inPlaceRadixSort = function(array){
  // Determine number of digits in largest number
  var max = Math.max.apply(null, array);
  var length = Math.log(max) / Math.log(2);
  var value;
  var ones;
  var i;

  // iterate over every element once for each digit in largest number
  for(var shiftBy = 0; shiftBy <= length; shiftBy++){
    // sort each value towards beginning or end of array based on current digit being examined
    i = 0;
    ones = 0;
    while( i + ones < array.length){
      shifted = array[i] >> shiftBy;
      if(shifted % 2 === 0){
        i++;
      } else {
        value = array.splice(i, 1)[0];
        array.push(value);
        ones++;
      }
    }
  }
  return array;
}