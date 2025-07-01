/*3.Create a function checkTemperature that takes a number (temperature in °C) and:

* Prints "It's cold" if the temperature is below 15
* Prints "The weather is nice" if the temperature is between 15 and 30
* Prints "It's hot" if the temperature is above 30 */

function checkTemperature(temperature){
    if (temperature < 15){
        return "It's cold";
    }
    else if (temperature >= 15 && temperature <= 30){
        return "The weather is nice";
    }
    else{
        return "It's hot";
    }
}

let result = checkTemperature(31);
console.log(result);