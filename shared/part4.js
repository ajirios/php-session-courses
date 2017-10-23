
var measurements = ["Length", "Weight", "Area", "Volume"];
var length = ["Meters", "Inches"];
var weight = ["Kilograms", "Pounds"];
var area = ["Square meters", "Acres"];
var volume = ["Litre", "Cubic feet"];



function convert()

{
var toConvert = document.getElementById("toConvert").value;
var convertFrom = document.getElementById("convertFrom").value;
var convertTo = document.getElementById("convertTo").value;

if ((convertFrom === "Pounds") && (convertTo === "Kilograms"))

{
convertPoundsToKg();
}

else if ((convertFrom === "Kilograms") && (convertTo === "Pounds"))

{
convertKgToPounds();
}

else if ((convertFrom === "Meters") && (convertTo === "Inches"))

{
convertMetersToInches();
}

else if ((convertFrom === "Inches") && (convertTo === "Meters"))

{
convertInchesToMeters();
}

else if ((convertFrom === "Square meters") && (convertTo === "Acres"))

{
convertSqmToAcres();
}

else if ((convertFrom === "Acres") && (convertTo === "Square meters"))

{
convertAcresToSqm();
}

else if ((convertFrom === "Litre") && (convertTo === "Cubic feet"))

{
convertLitresToCbfeet();
}

else if ((convertFrom === "Cubic feet") && (convertTo === "Litre"))

{
convertCbfeetToLitres();
}

else

{
document.getElementById("converted").value = toConvert;
}

}


function convertPoundsToKg()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert * 0.453592;
document.getElementById("converted").value = converted;
}


function convertKgToPounds()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert / 0.453592;
document.getElementById("converted").value = converted;
}


function convertMetersToInches()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert * 39.3700787;
document.getElementById("converted").value = converted;
}


function convertInchesToMeters()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert / 39.3700787;
document.getElementById("converted").value = converted;
}


function convertSqmToAcres()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert / 4046.8565;
document.getElementById("converted").value = converted;
}


function convertAcresToSqm()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert * 4046.8565;
document.getElementById("converted").value = converted;
}


function convertLitresToCbfeet()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert * 0.0353147;
document.getElementById("converted").value = converted;
}


function convertCbfeetToLitres()

{
var toConvert = document.getElementById("toConvert").value;
var converted = toConvert / 0.0353147;
document.getElementById("converted").value = converted;
}


function loadMetrics()

{
var selection = document.getElementById("measurement").value;

if (selection === "weight")

{
  displayWeightMetrics();
}

else if (selection === "length")

{
  displayLengthMetrics();
}

else if (selection === "area")

{
  displayAreaMetrics();
}

else if (selection === "volume")

{
  displayVolumeMetrics();
}

}


function displayWeightMetrics()

{

document.getElementById("fromMetric1").value = weight[0];
document.getElementById("fromMetric1").innerHTML = weight[0];
document.getElementById("fromMetric2").value = weight[1];
document.getElementById("fromMetric2").innerHTML = weight[1];

document.getElementById("toMetric1").value = weight[0];
document.getElementById("toMetric1").innerHTML = weight[0];
document.getElementById("toMetric2").value = weight[1];
document.getElementById("toMetric2").innerHTML = weight[1];

}


function displayLengthMetrics()

{

document.getElementById("fromMetric1").value = length[0];
document.getElementById("fromMetric1").innerHTML = length[0];
document.getElementById("fromMetric2").value = length[1];
document.getElementById("fromMetric2").innerHTML = length[1];

document.getElementById("toMetric1").value = length[0];
document.getElementById("toMetric1").innerHTML = length[0];
document.getElementById("toMetric2").value = length[1];
document.getElementById("toMetric2").innerHTML = length[1];

}


function displayAreaMetrics()

{

document.getElementById("fromMetric1").value = area[0];
document.getElementById("fromMetric1").innerHTML = area[0];
document.getElementById("fromMetric2").value = area[1];
document.getElementById("fromMetric2").innerHTML = area[1];

document.getElementById("toMetric1").value = area[0];
document.getElementById("toMetric1").innerHTML = area[0];
document.getElementById("toMetric2").value = area[1];
document.getElementById("toMetric2").innerHTML = area[1];
}


function displayVolumeMetrics()

{

document.getElementById("fromMetric1").value = volume[0];
document.getElementById("fromMetric1").innerHTML = volume[0];
document.getElementById("fromMetric2").value = volume[1];
document.getElementById("fromMetric2").innerHTML = volume[1];

document.getElementById("toMetric1").value = volume[0];
document.getElementById("toMetric1").innerHTML = volume[0];
document.getElementById("toMetric2").value = volume[1];
document.getElementById("toMetric2").innerHTML = volume[1];

}


function calculateMortgage()

{

var principal = document.getElementById("principal").value;
var annuity = document.getElementById("annuity").value;
var perpetuity = document.getElementById("duration").value;

var interest = annuity / 1200;
var numerator = interest * (Math.pow(interest + 1, (perpetuity * 12)));
var denominator = (Math.pow(interest + 1, (perpetuity * 12))) - 1;
var mortgage = parseFloat(principal * (numerator / denominator));
mortgage = mortgage.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});

document.getElementById("mortgage").innerHTML = mortgage + " / month.";

}


function calculateSavings()

{

var payroll = document.getElementById("payroll").value;
var rent = document.getElementById("rent").value;
var food = document.getElementById("food").value;
var miscellaneous = document.getElementById("miscellaneous").value;
var savingsGoal = document.getElementById("savings-goal").value;

var monthlySavings = payroll - rent - food - miscellaneous;
var months = (savingsGoal / monthlySavings);

if (months > parseInt(months))

{

months = months + 1;

}

months = parseInt(months);

monthlySavings = monthlySavings.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});

document.getElementById("savings").innerHTML = monthlySavings + " / month within " + months + " months.";

}


