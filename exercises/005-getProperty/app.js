function getProperty(obj, key) {
   return obj[key];
}

let car = {
  model: 'Toyota'
};
let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'