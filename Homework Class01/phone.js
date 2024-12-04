let phoneAmount = 30
let phonePrice = 119.95
let tax = 5

let noTax = phonePrice * phoneAmount

let taxAmount = ((noTax * tax) / 100);

let endresult = noTax + taxAmount

console.log("Taxed price is:")
console.log(endresult)