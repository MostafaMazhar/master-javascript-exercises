function addProperty(obj, key) {
 obj[key]= true;
 return obj;
}

let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true