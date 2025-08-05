// Creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character.

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