// Heap sort puts the elements of an array into a heap,
// then removes values one at a time and puts them back
// into an array, returning that array

var heapSort = function(array){
  var heap = new Heap();
  while(array.length){
    heap.insert(array.pop());
  }
  array.push(heap.remove());
  return array;
}

// Heaps are a self sorting structure, 
// often represented as trees.
// Each node has up to n (2) children.
// When a value is added, it is added to the first available child slot
// Then it's compared to it's parent value, and swapped if smaller.
// This continues until the added value is in the correct place
// When values are removed, they're popped off the top, and the last
// value in the heap is popped off, added to the top, then sorted
// until the heap is properly sorted

var Heap = function(){
  this._data = [];
};

Heap.prototype.leftChildOf = function(index){
  return index * 2 + 1;
};

Heap.prototype.rightChildOf = function(index){
  return index * 2 + 2;
};

Heap.prototype.parentOf = function(index){
  if(!index) return null;
  return Math.ceil(index / 2) - 1;
};

Heap.prototype.swap = function(i1, i2){
  var temp = this._data[i1];
  this._data[i1] = this._data[i2]
  this._data[i2] = temp;
}
