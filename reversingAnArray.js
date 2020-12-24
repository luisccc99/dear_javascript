function reverseArray(arr) {
  let copy = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[arr.length - 1 - i];
  }
  return copy;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let swap = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = swap;
  }
}

let numbers = [1, 2, 3, 4, 5];
reverseArrayInPlace(numbers);
console.log(numbers);