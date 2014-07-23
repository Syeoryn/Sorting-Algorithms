// Bogo sort shuffles the array, then checks if it's sorted
// If not sorted, it shuffles again.
// If sorted, it stops

var bogoSort = function(array){
  while(!isSorted(array)){
    shuffle(array);
  }
  return array;
}

var shuffle = function(array){
  for(var i = 0; i < array.length; i++){
    var newIndex = Math.floor(Math.random() * array.length - i) + i;
    temp = array[i];
    array[i] = array[newIndex];
    array[newIndex] = temp;
  }
  return array;
}