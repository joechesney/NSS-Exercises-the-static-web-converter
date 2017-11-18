function toCelsius (tempF) {
    var tempC = (tempF - 32) * (5/9);
    return tempC;
}

function toFahrenheit (tempC) {
    var tempF = (tempC * (9/5)) + 32;
    return tempF;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var result = document.getElementById("result");
var unit = "";

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    var temp = document.getElementById("inputTemp").value;
    var which = document.getElementsByName("unitOf");
    for (var i = 0; i < which.length; i++) {
        if (which[i].checked) {
            unit = which[i].value;
        }
    }
    if (unit === "FtoC"){  
        result.innerHTML = toCelsius(temp);

    } else if (unit === "CtoF") {
        result.innerHTML = toFahrenheit(temp);
    }
}



