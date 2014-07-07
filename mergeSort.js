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