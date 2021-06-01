// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here)
  const res = [];

  arr1.every((e1) =>
    arr2.includes((e2) => {
      if (e1 > e2) {
        res.push("true");
      } else {
        res.push("false");
      }
    })
  );
  return res;
}

console.log(result(arr1, arr2));
