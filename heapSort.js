// Heap sort puts the elements of an array into a heap,
// then removes values one at a time and puts them back
// into an array, returning that array

var heapSort = function(array){
  var heap = new Heap();
  while(array.length){
    heap.insert(array.pop());
  }
  while(heap.showFirst() !== undefined){
    array.push(heap.remove());
  }
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

Heap.prototype.insert = function(value){
  this._data.push(value);
  var insertion = this._data.length - 1;
  var parent = this.parentOf(insertion);
  while(this._data[insertion] < this._data[parent]){
    this.swap(insertion, parent);
    insertion = parent;
    parent = this.parentOf(insertion);
  }
  return value;
}

Heap.prototype.remove = function(){
  if(this._data.length === 1) return this._data.pop();
  var removed = this._data[0];
  this._data[0] = this._data.pop();
  var insertion = 0;
  var leftChild = this.leftChildOf(0);
  var rightChild = this.rightChildOf(0);
  child = this._data[leftChild] < this._data[rightChild]  || this._data[rightChild] === undefined ? leftChild : rightChild;
  while(this._data[insertion] > this._data[child]){
    this.swap(insertion, child);
    insertion = child;
    var leftChild = this.leftChildOf(insertion);
    var rightChild = this.rightChildOf(insertion);
    child = this._data[leftChild] < this._data[rightChild] ? leftChild : rightChild;
  }
  return removed;
}

Heap.prototype.showFirst = function(){
  return this._data[0];
}

// TODO: fix case: heapSort([3, 6, 4, 7, 4, 5, 58, 9, 7, 4, 2, 3, 35]);