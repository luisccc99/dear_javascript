function range(start, end, step = start < end ? 1 : -1) {
  let numbers = [];
  if (start > end || step < 0) {
    for (start; start >= end; start += step) {
      numbers.push(start);
    }
  } else {
    for (start; start <= end; start += step) {
      numbers.push(start);
    }
  }
  return numbers;
}

function sum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sum(range(1,19)));
