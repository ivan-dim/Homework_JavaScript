function createFullNames(firstNames, lastNames) {
  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    fullNames[fullNames.length] =
      i + 1 + ". " + firstNames[i] + " " + lastNames[i];
  }

  return fullNames;
}

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
let full = createFullNames(first, last);

console.log(full);
