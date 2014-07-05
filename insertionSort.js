// Insertion sort takes an array of values, 
// starts at the beginning, and compares
// each value to the values before it.
// working backwards from the current index,
// when an element is found to be less than the current element,
// it's inserted after that element.

var insertionSort = function(array){
  // for every value in the array
  for(var i = 0; i < array.length; i++){
    // look back at the elements before it
    var current = array[i];
    var comparisonIndex = i;
    // as long as comparisonIndex value is less than previous value
    while(current < array[comparisonIndex - 1]){
      // move up previous value
      array[comparisonIndex] = array[comparisonIndex-1];
      comparisonIndex--;
    }
    // replace sorted value back into array
    array[comparisonIndex] = current;
  }
  return array;
}