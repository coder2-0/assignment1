/*Jashanpreet Kaur
SODV1201
Software Development Diploma program.
*/
setTimeout(function() {
    document.getElementById('picture').src = 'mypicture.jpg';
    document.getElementById('name').style.display = 'block'; 
}, 10000);

var currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
document.getElementById('footer').innerHTML += " | Date: " + formattedDate;
