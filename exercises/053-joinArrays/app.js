function joinArrays(arr1, arr2) {
  return `${arr1},${arr2}`
  
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]