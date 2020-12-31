function arrayToList(arr) {
  let list;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: i === arr.length - 1 ? null : list};
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(value, list) {
  return { value: value, rest: list };
}

function nth(list, index) {
  let count = 0;
  for (let node = list; node; node = node.rest) {
    if (count === index) {
      return node.value;
    }
    count++;
  }
  return undefined;
}

function recursiveNth(list, index) {
  if (index === 0) {
    return list.value;
  } else if (list.rest === undefined) {
    return undefined;
  } else {
    return recursiveNth(list.rest, --index);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20