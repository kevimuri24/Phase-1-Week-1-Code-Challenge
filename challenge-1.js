// Challenge 1: Student Grade Generator.

// Function that iterates over user grades and returns the correct grade.
function gradingRubrick(grade){
    if (grade > 79){
        return "A"
    } else if(grade >= 60 && grade <=79){
        return "B"
    } else if(grade > 49 && grade <=59){
        return "C"
    }else if(grade > 40 && grade <=49){
        return "D"
    } else if(grade < 40){
        return "E"       
    } else{
        return "Please enter a figure between 0 - 100"
    }
}

// invokes the function to check the grade from user input.
console.log(gradingRubrick(100))