// Bogo sort shuffles the array, then checks if it's sorted
// If not sorted, it shuffles again.
// If sorted, it stops

var bogoSort = function(array){
  while(!isSorted(array)){
    shuffle(array);
  }
  return array;
}