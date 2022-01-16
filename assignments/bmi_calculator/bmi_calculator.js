// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    var BMI;
    if (mass<=0 || height<=0){
        BMI= "INVALID INPUT";
    
    }
    else {
        BMI=mass / (height * height);
    }
    return BMI
}

module.exports = BMICalculator;
