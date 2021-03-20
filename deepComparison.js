function deepEqual(thisObj, thatObj) {
  propertiesOfThis = Object.keys(thisObj);
  propertiesOfThat = Object.keys(thatObj);
  console.log(propertiesOfThis, propertiesOfThat)
  n = propertiesOfThis.length;
  m = propertiesOfThat.length;
  if (n === m) {
    for (let i = 0; i < n; i++) {
      if (propertiesOfThis[i] != propertiesOfThat[i]) {
        return false
      } else if (
        thisObj[propertiesOfThis[i]] !== thatObj[propertiesOfThat[i]]
      ) {
        console.log(thisObj[propertiesOfThis[i]], thatObj[propertiesOfThat[i]])
        return false
      } else {
        return true;
      }
    }
  }
}
let obj = { here: { is: "an" }, object: 2 };
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true