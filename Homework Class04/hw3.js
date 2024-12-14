function greet(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) {
        result += ' ';
      }
    }
  
    return result;
  }
  
  let sedcGreet = ["Hello", "there", "students", "of", "SEDC", "!"];
  let result = greet(sedcGreet);
  console.log(result); 

