// Creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character.



/*
// Nested for loop for changed sizes
const size = 8;
let board = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0)
            board += " ";
        else
            board += "#";
    }
    if (i + 1 < size)
        board += "\n";
}

console.log(board);
*/



/*
// Single for loop with changed sizes, only one variable
const size = 8;
let board = "";

for (let i = 1; i < size * size + size; i++){
    if (i % (size + 1) === 0){
        board += "\n";
    } else if (i % 2 === 1){
        board += " ";
    } else if (i % 2 === 0){
        board += "#";
    } else {
        console.log("Error");
    }
}

console.log(board);
*/



/*
// Single for loop with singular size (8)
let board = "";
let even = " # # # #\n";
let odd = "# # # # \n";

for (let i = 0; i < 8; i++){
    if (i % 2 === 0)
        board += even;
    else
        board += odd;
}

console.log(board);
*/


// Two separate for loops for any size 
const args = process.argv.slice(2);
const size = args[0];
let board = "";
let even = "";
let odd = "";

//construct the "even" and "odd" # row strings
for (let i = 0; i < size; i++){
    even += i % 2 === 0 ? " " : "#";
    odd += i % 2 === 0 ? "#" : " ";

    // Same output with an if statement instead of ternary operators
    // if (i % 2 === 0) {
    //     even += " ";
    //     odd += "#";
    // } else {
    //     even += "#";
    //     odd += " ";
    // }
}

//construct the output
for (let i = 0; i < size; i++){
    if (i % 2 === 0)
        board += even;
    else
        board += odd;
    board += "\n";
}

//output
console.log(board);