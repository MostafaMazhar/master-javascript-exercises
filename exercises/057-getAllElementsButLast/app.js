function getAllElementsButLast(array) {
   return array.slice(0, -1)

}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output);