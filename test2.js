// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  const odd = arr2.filter((item) => item % 2 === 1);
  const even = arr2.filter((item) => item % 2 === 0);
  const ascOrder = odd.sort((a, b) => (a > b ? -1 : 1));
  const desOrder = even.sort((a, b) => (a > b ? 1 : -1));
  const newArray1 = ascOrder.concat(arr1);
  const newArray2 = newArray1.concat(desOrder);
  const newArrayFinal = Array.from(new Set(newArray2));
  return newArrayFinal;
}

console.log(result(arr1, arr2));
