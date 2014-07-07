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
  if(array.length === 1) return array;
  var left  = array.slice( 0, Math.floor(array.length / 2) );
  var right = array.slice( Math.floor(array.length / 2) );
  return merge(simpleMergeSort(left), simpleMergeSort(right));
}

var merge = function(array1, array2){
  var merged = [];
  var next;
  var targetLength = array1.length + array2.length;
  var i1 = 0;
  var i2 = 0;
  while(merged.length < targetLength){
    if( array1[i1] <= array2[i2] || array2[i2] === undefined ){
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


// Merge sort can be optimized by more selectively splitting the initial array.
// Rather than splitting the array into the smallest pieces and merging from there,
// it is more efficient to create the groups based on their initial order--
// as long as values are already in order, they don't need to be split up.
// This method of finding the 'natural split' can noticeably improve performance

// Furthermore, implementing merge sort without recursion will increase the speed as well
// Starting from the beginning of the array and finding the natural split,
// a reduce-like algorithm can be applied

// Example: 
// [3, 5, 4, 2, 7, 1, 6, 8, 9]
// [[3, 5], [4], 2, 7, 1, 6, 8, 9]
// [[3, 4, 5], 2, 7, 1, 6, 8, 9]
// [[3, 4, 5], [2, 7], 1, 6, 8, 9]
// [[2, 3, 4, 5, 7], 1, 6, 8, 9]
// [[2, 3, 4, 5, 7], [1, 6, 8, 9]]
// [[1, 2, 3, 4, 5, 6, 7, 8, 9]]