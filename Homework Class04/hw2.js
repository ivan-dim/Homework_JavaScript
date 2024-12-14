function sumArray(numbers) {
    if (numbers.length !== 5) {
        console.error("Must have exactly 5 numbers");
        return;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i])) {
            console.error("Invalid input");
            return;
        }
        sum += numbers[i];
    }
    console.log(sum);
}

function validateNumber(number) {
    return typeof number === "number" && !isNaN(number);
}

sumArray([23, 2, 5, 9, 7]); 

