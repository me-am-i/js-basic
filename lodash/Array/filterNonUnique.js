// 2018-10-29

// Filters out the non-unique values in an array.

const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

filterNonUnique([1, 2, 2, 3, 4, 4, 5]) // [1,3,5]
