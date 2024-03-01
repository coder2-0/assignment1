/*Jashanpreet Kaur
SODV1201
Software Development Diploma program.
*/
document.addEventListener("DOMContentLoaded", function() {
    let marksInput = document.getElementById("input");
    let gradesOutput = document.getElementById("output");
    let validationMessage = document.getElementById("validation-message");
    let btn = document.getElementById("calculate");
    
    btn.addEventListener("click", function() {
        let marks = parseInt(marksInput.value);
        
        if (isNaN(marks)) {
            validationMessage.textContent = "Invalid input: Please enter a valid number.";
            gradesOutput.value = "";
        } else if (marks < 0 || marks > 100) {
            validationMessage.textContent = "Invalid input: Marks must be between 0 and 100.";
            gradesOutput.value = "";
        } else {
            let grade;
            if (marks >= 90) {
                grade = "A";
            } else if (marks >= 80) {
                grade = "B";
            } else if (marks >= 70) {
                grade = "C";
            } else if (marks >= 50) {
                grade = "D";
            } else {
                grade = "F";
            }
            
            validationMessage.textContent = "";
            gradesOutput.value = grade;
        }
    });
    
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    document.getElementById('footer').innerHTML += " | Date: " + formattedDate;
});
