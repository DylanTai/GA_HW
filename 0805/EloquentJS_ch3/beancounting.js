// A function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
// A function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

function countBs(input){
    let amt = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] == "B")
            amt++;
    }
    return amt;
}

function countChar(input, letter){
    let amt = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] == letter)
            amt++;
    }
    return amt;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4