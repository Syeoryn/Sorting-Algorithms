// Bubble sort takes an array of values,
// and starting from the beginning of the array,
// it compares each set of two adjacent values,
// and swaps them if out of order
// this process repeats until the array is sorted

var bubbleSort = function(array){
  var continueSorting = true;

  while(continueSorting){
    continueSorting = false
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        continueSorting = true;
      }
    }
  }

  return array;
}
