// Challenge 3: Net grossSalary Calculator

// Declare the Gross Salary
let grossSalary = 50000;

// All applicaple relief allowed
const personalRelief = 2400;
const insuranceRelief = 0.15 * nhifBracket(grossSalary)

// Calculate the taxable income by deducting, relief, nssf, housing levy and nhif
let taxableIncome = grossSalary - personalRelief - insuranceRelief - nhifBracket(grossSalary) - housingLevy(grossSalary) - nssfDeduction(grossSalary)

// Function to calculate PAYE based on grossSalary
function payeBracket(taxableIncome){
    if (taxableIncome <= 24000){
        return taxableIncome * 0.1;
    }else if (taxableIncome > 24001 && taxableIncome <=32333){
        return taxableIncome * 0.25;
    } else if(taxableIncome > 32334 && taxableIncome <=500000){
        return taxableIncome * 0.3;
    } else if(taxableIncome > 500001 && taxableIncome <=800000){
        return taxableIncome * 0.325;
    } else if(taxableIncome > 800001){
        return taxableIncome * 0.35;
    }
}

// Function to calculate NHIF contribution
function nhifBracket(grossSalary){
    if (grossSalary <= 5999){
        return 150;
    }else if(grossSalary >= 6000 && grossSalary <=7999){
        return 300;
    } else if(grossSalary >= 8000 && grossSalary <=11999){
        return 400;
    } else if(grossSalary >= 12000 && grossSalary <=14999){
        return 500;
    }else if(grossSalary >= 15000 && grossSalary <=19999){
        return 600;
    } else if(grossSalary >= 20000 && grossSalary <=24999){
        return 750;
    } else if(grossSalary >= 25000 && grossSalary <=29999){
        return 850;
    }else if(grossSalary >= 30000 && grossSalary <=34999){
        return 900;
    } else if(grossSalary >= 35000 && grossSalary <=39999){
        return 950;
    } else if(grossSalary >= 40000 && grossSalary <=44999){
        return 1000;
    }else if(grossSalary >= 45000 && grossSalary <=49999){
        return 1100;
    } else if(grossSalary >= 50000 && grossSalary <=59999){
        return 1200;
    } else if(grossSalary >= 60000 && grossSalary <=69999){
        return 1300;
    }else if(grossSalary >= 70000 && grossSalary <=79999){
        return 1400;
    }else if(grossSalary >= 80000 && grossSalary <=89999){
        return 1500;
    }else if(grossSalary >= 90000 && grossSalary <=99999){
        return 1600;
    }else if(grossSalary > 100000){
        return 1700;
    }else{
        return "Please enter a valid grossSalary figure";
    }
}


// Function to calculate NSSF contribution
function nssfDeduction(grossSalary){
    if(grossSalary <= 36000){
        return grossSalary * 0.06;
    } else{
        return 36000 * 0.06;
    }
}

// Function to calculate Housing Levy
function housingLevy(grossSalary){
    return grossSalary * 0.015
}

// Calculate the net salary after deducting PAYE as the final item.
let netSalary = taxableIncome - payeBracket(taxableIncome)

// Create a reciept to log all outputs.
console.log(`Gross Salary: ${grossSalary}`)
console.log(`Taxable income: ${taxableIncome}`)
console.log(`Personal Relief: ${personalRelief}`)
console.log(`Insurance Relief: ${insuranceRelief}`)
console.log(`Housing Levy: ${housingLevy(grossSalary)}`)
console.log(`NHIF : ${nhifBracket(grossSalary)}`)
console.log(`Total PAYE: ${payeBracket(taxableIncome)}`)
console.log(`Net salary after deductions: ${netSalary}`)


