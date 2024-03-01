/*Jashanpreet Kaur
SODV1201
Software Development Diploma program.
*/
$(document).ready(function() {
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    }

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    $('#convert').click(function() {
        var fahrenheit = parseFloat($('#fahrenheit').val());

        if (!isNaN(fahrenheit)) {
            var celsius = fahrenheitToCelsius(fahrenheit);

            var kelvin = celsiusToKelvin(celsius);

            $('#result').html('Temperature in Celsius: ' + celsius.toFixed(2) + '°C<br>' +
                              'Temperature in Kelvin: ' + kelvin.toFixed(2) + 'K');
        } else {
            $('#result').html('Please enter a valid temperature in Fahrenheit.');
        }
    });
});
