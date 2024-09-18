//challenge 1

const arr = [1, 2, 3, 4, 5];

arr.unshift(6);

arr.push(0);

arr.reverse();

console.log(arr);


//challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];

const uniqueArr3 = [...new Set(arr3)];

console.log(uniqueArr3);
