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
var print = "";
var unit = "";
var clear = document.getElementById("clear");
clear.addEventListener("click", clearAll);
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
// to prevent page reload, 'enter' button command had to be attached to the form itself, instead of a button
var theForm = document.getElementById("theForm");
theForm.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return determineConverter();
    }
});
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
        // rounds calculation to nearest while number
        // assigns calc to var so i can run 'if' statements on it
        var num = Math.round(toCelsius(temp));
        if (num > 32){
            print = "<h2 style='color:red;'>";
        } else if (num < 0) {
            print ="<h2 style='color:blue;'>";
        } else {
            print = "<h2 style='color:green;'>";
        }
        print += num;
        print += "&deg; C</h2>";
        result.innerHTML = print;
    

    } else if (unit === "CtoF") {
        var num = Math.round(toFahrenheit(temp));
        if (num > 90){
            print = "<h2 style='color:red;'>";
        } else if (num < 32) {
            print ="<h2 style='color:blue;'>";
        } else {
            print = "<h2 style='color:green;'>";
        }
        print += num;
        print += "&deg; F</h2>";        
        result.innerHTML = print;
    }
}

function clearAll() {
    document.getElementById("inputTemp").value = "";
}



