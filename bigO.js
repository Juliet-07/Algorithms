// Constant-Time Algorithm O(1)

const getLast = (items) => items[items.length - 1];

console.log(getLast(["a", "b", "c", "d"]));

// Linear-Time Algorithm O(N)
const array = ["a", "b", "c", "d"];

const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match) return i;
  return -1;
};
console.log(findIndex(array, "a"));
console.log(findIndex(array, "d"));
console.log(findIndex(array, "e"));

// Quadratic-Time Algorithm O(N^2)
const buildSquareMatrix = (items) => {
  let matrix = [];

  for (let i = 0, total = items.length; i < total; i++) {
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};

console.log(buildSquareMatrix(["a", "b", "c"]));

// Logarithmic-Time Algorithm O(nlogn)
const quickSort = (list) => {
  if (list.length < 2) return list;

  let pivot = list[0];
  let left = [];
  let right = [];

  for (let i = 1, total = list.length; i < total; i++) {
    if (list[i] < pivot) left.push(list[i]);
    else right.push(list[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort(["q", "a", "z", "w", "s", "x", "e", "d", "c", "r"]));
