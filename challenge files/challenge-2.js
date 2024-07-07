// Challenge 2: Speed Detector

// function to measure the speed of a driver and issue the correct demerits
function speedDetector(speed){
    // We run an 'if statement' to check if the speed is below or above 70
    if(speed < 70){
        return "OK"

    } else if (speed > 70){
        // if speed is above 70, we subtract the total from the speed limit to check if its equal or below 5KM/s
       if(speed - 70 === 5){
        return "1 point"
       } else if(speed - 70 === 10){
        return "2 points"
       }else if(speed - 70 === 15){
        return "3 points"
       }else if(speed - 70 === 20){
        return "4 points"
       }else if(speed - 70 === 25){
        return "5 points"
       }else if(speed - 70 === 30){
        return "6 points"
       }else if(speed - 70 === 35){
        return "7 points"
       }else if(speed - 70 === 40){
        return "8 points"
       }else if(speed - 70 === 45){
        return "9 points"
       }else if(speed - 70 === 50){
        return "10 points"
       }else if(speed - 70 === 55){
        return "11 points"
       }else if(speed - 70 === 60){
        return "License suspended"
       } else {
        return "Please slow down!"
        }
    } 
}

// Invoke the function and pass a speed to test our program
console.log(speedDetector(85))
