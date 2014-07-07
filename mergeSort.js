// Merge sort sorts an array by splitting it into n sub-arrays.
// The sub-arrays are then merged together with the correct
// sorting order 2 at a time, forming n/2 sub-arrays.  
// This process repeats until only one array remains and is sorted.
// Note: merge sort is usually not performed in place.

// Example:
// [3, 5, 4, 2, 7, 1, 6, 8, 9]
// [3], [5], [4], [2], [7], [1], [6], [8], [9]
// [3, 5], [2, 4], [1, 7], [6, 8], [9]
// [2, 3, 4, 5], [1, 6, 7, 8], [9]
// [1, 2, 3, 4, 5, 6, 7, 8], [9]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

var simpleMergeSort = function(array){
  var subsets = [];
  for(var i = 0; i < array.length; i++){
    subsets.push([array[i]]);
  }
  while(array.length > 1){

  }
}

var merge = function(array1, array2){
  var merged = [];
  var next;
  var targetLength = array1.length + array2.length;
  var i1 = 0;
  var i2 = 0;
  while(merged.length < targetLength){
    if( array1[i1] <= array2[i2] || !array2[i2] ){
      next = array1[i1];
      i1++;
    } else {
      next = array2[i2];
      i2++;
    }
    merged.push(next);
  }
  return merged;
}