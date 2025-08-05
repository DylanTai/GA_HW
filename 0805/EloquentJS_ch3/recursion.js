//A recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

function isEven(num){
    if (num == 0)
        return true;
    if (num == 1)
        return false;
    // Added a fix to numbers that are not positive
    return isEven(num > 0 ? num - 2 : num + 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ?? (should be false)