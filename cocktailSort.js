// cocktail sort is a bi-directional bubble sort.
// Starting at the beginning and iterating forward,
// the largest value is found and swapped into the last postion.
// Moving backwards from the end, the smallest value is found
// and swapped into the first position.
// This is then repeated to swap the second largest value
// into the second to last position, and so on 
// until the array is sorted.

var cocktailSort = function(array, start, end){
  start = start || 1;
  end = end || array.length;
  if(start >= end){
    return array;
  }
  for(var i = start; i < end; i++){
    console.log('up', i);
    if(array[i - 1] > array[i]){
      var temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
    }
  }
  for(var i = end; i > start - 1; i--){
    console.log('down',i)
    if(array[i] < array[i - 1]){
      var temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
    }
  }
  return cocktailSort(array,start + 1, end -1);
}
