function stairCase(steps) {
    
    // want to declare a variable that will hold the final output that we will print 
    let output = ' '
    
    // outer for loop to keep track of the overall number of steps
    for (let i = 1; i <= steps; i++) {
    
        // inner for loop to keep track of the preceding spaces on each line
        for (let s = steps - 1; s >= i; s--) {
            output += ' '
        }
        // inner for loop to keep track of the #s on each line
        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        // new line
        output += "\n"
       
    }
    // log the final result
    console.log(output)
}
console.log(stairCase(3))