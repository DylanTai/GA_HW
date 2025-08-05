// Print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number.
// For numbers divisible by 5 (and not 3), print "Buzz" instead.

//First iteration
console.log("First iteration: ");
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("End of first iteration.\n");

//Second iteration
console.log("Second iteration: ");
for (let i = 1; i <= 100; i++){
    let newStr = "";
    if (i % 3 === 0) {
        newStr += "Fizz";
    }
    if (i % 5 === 0) {
        newStr += "Buzz";
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
        newStr += i;
    }
    console.log(newStr)
}
console.log("End of second iteration.");