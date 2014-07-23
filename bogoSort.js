// Bogo sort shuffles the array, then checks if it's sorted
// If not sorted, it shuffles again.
// If sorted, it stops

var bogoSort = function(array){
  var i = 0
  while(!isSorted(array)){
    i++;
    shuffle(array);
  }
  console.log('Iterations:', i);
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

var isSorted = function(array){
  for(var i = 1; i < array.length; i++){
    if(array[i] < array[i - 1]) return false;
  }
  return true;
}