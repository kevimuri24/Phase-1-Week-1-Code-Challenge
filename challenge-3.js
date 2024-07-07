// Challenge 3: Net Salary Calculator

// Function to calculate the Net Salary after deductions

// Function to calculate relief

// Function to calculate PAYE based on salary
function payeBracket(salary){
    if (salary <= 24000){
        return salary * (10/100);
    }else if (salary > 24001 && salary <=32333){
        return salary * (25/100);
    } else if(salary > 32334 && salary <=500000){
        return salary * (30/100);
    } else if(salary > 500001 && salary <=800000){
        return salary * (32.5/100);
    } else if(salary > 800001){
        return salary * (35/100);
    }
}

// Function to calculate NHIF contribution
function nhifBracket(salary){
    if (salary <= 5999){
        return 150;
    }else if(salary > 6000 && salary <=7999){
        return 300;
    } else if(salary > 8000 && salary <=11999){
        return 400;
    } else if(salary > 12000 && salary <=14999){
        return salary - 500;
    }else if(salary > 15000 && salary <=19999){
        return salary - 600;
    } else if(salary > 20000 && salary <=24999){
        return salary - 750;
    } else if(salary > 25000 && salary <=29999){
        return salary - 850;
    }else if(salary > 30000 && salary <=34999){
        return salary - 900;
    } else if(salary > 35000 && salary <=39999){
        return salary - 950;
    } else if(salary > 40000 && salary <=44999){
        return salary - 1000;
    }else if(salary > 45000 && salary <=49999){
        return salary - 1100;
    } else if(salary > 50000 && salary <=59999){
        return salary - 1200;
    } else if(salary > 60000 && salary <=69999){
        return salary - 1300;
    }else if(salary > 70000 && salary <=79999){
        return salary - 1400;
    }else if(salary > 80000 && salary <=89999){
        return salary - 1500;
    }else if(salary > 90000 && salary <=99999){
        return salary - 1600;
    }else if(salary > 100000){
        return salary - 1700;
    }else{
        return "Please enter a valid salary figure";
    }
}
console.log(nhifBracket(50000))
// Function to calculate NSSF contribution
function nssfDeduction(salary){
    if(salary <= 36000){
        return salary * 0.06;
    } else{
        return 36000 * 0.06;
    }
}



// Function to calculate Housing Levy
function housingLevy(salary){
    return salary * (1.5/100)
}



