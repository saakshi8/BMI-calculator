function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        if (bmi < 18.5) {
            document.getElementById("result").innerHTML = "Your BMI is " +bmi.toFixed(1)+ " .You are underweight.";
        }   
        else if (bmi >= 18.5 && bmi < 24.9) {
            document.getElementById("result").innerHTML = "Your BMI is "+ bmi.toFixed(1) + " .You have a normal weight.";
        }
        else if (bmi >= 25 && bmi < 29.9) {
            document.getElementById("result").innerHTML = "Your BMI is" + bmi.toFixed(1) + " .You are overweight.";
        }
        else {
            document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1) + " .You are obese.";
        }
    }
}