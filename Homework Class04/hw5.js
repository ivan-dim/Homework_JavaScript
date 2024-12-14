function sumMaxMin(numbers) {
  let max, min;
  for (let item of numbers) {
    if (typeof item === "number") {
      max = item;
      min = item;
      break;
    }
  }

  numbers.forEach((item) => {
    if (typeof item === "number") {
      if (item > max) max = item;
      if (item < min) min = item;
    }
  });

  return {
    max: max,
    min: min,
    sum: max + min,
  };
}

let numbers = [4, 6, 7, 9, 14];
let result = sumMaxMin(numbers);
console.log(`Max ${result.max}, Min ${result.min}, Sum ${result.sum}`);
