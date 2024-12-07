function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = (currentYear - birthYear);
    console.log(`You are ${age} years old.`);
}


calculateAge(2001); 
calculateAge(1973); 
calculateAge(1999); 
