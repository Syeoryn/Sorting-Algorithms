  // Quick sort starts with the value at index 0, treating it as a pivot, 
  // and sorts the array into two chunks: values greater, and values less than the pivot
  // Then, the pivot is placed in the middle of these two chunks, which is it's final position.
  // This is then repeated for the left half and the right half, until all chunks are sorted.

  // To sort array into chunks, two pointers are maintained.  A left pointer, which starts at index 1
  // and moves right until a value greater than the pivot is found; and a right pointer, which starts
  // at index length - 1 and moves left until a value less than the pivot is found.  Once the left and 
  // right pivots cross each other (or equal each other), the pivot is swapped with the value one index
  // to the left of the left pointer.  If both pointers stop before equaling each other, the two values
  // the pointers point at are swapped, and the pointers continue progressing until they equal each other.
  // This is done recursively with the base case of an array of length 0 or 1, as these arrays are already
  // sorted.

  // Efficient implementations of quick sort are done in place, but are not stable.

  var quickSort = function(array, start, end){
    start = start || 0;
    if(end === undefined) end = array.length - 1;
    if(end - start <= 1) return array;

    var pivotPointer = start;
    var leftPointer = start + 1;
    var rightPointer = end;
    var swapLeft = false;
    var swapRight = false;
    
    while(leftPointer <= rightPointer){
      if(array[leftPointer] <= array[pivotPointer]){
        leftPointer++;
      } else {
        swapLeft = true;
      }
      if(array[rightPointer] > array[pivotPointer]){
        rightPointer--;
      } else {
        swapRight = true;
      }
      if(swapLeft && swapRight){
        var temp = array[leftPointer];
        array[leftPointer] = array[rightPointer];
        array[rightPointer] = temp;
        swapLeft = false;
        swapRight = false;
      }
    }

    // swap pivot with left of leftPointer
    temp = array[leftPointer - 1];
    array[leftPointer - 1] = array[pivotPointer];
    array[pivotPointer] = temp;

    // recurse left
    quickSort(array, start, leftPointer - 2);

    // recurse right
    quickSort(array, leftPointer, end);

    return array;
  };

