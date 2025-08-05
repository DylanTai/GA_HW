// Prints a equal legged right triangle with the size of 7

for (let i = 1; i <= 7; i++){
    let output = "";
    for (let j = i; j > 0; j--){
        output += "#";
    }
    console.log(output);
}