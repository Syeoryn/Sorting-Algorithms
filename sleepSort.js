// Sleep sort sets a timer proportional to each value in the array,
// then pushes that value to the sorted array when the timer ends

var sleepSort = function(array){
  var sorted = [];
  var setTimer = function(number){
    setTimeout(function(){
      sorted.push(number);
    }, number*1);
  }
  for(var i = 0; i < array.length; i++){
    setTimer(array[i]);
  }
  return sorted;
}
