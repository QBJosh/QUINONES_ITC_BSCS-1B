// Assignment #1 - Conversion

function celsiusToFahrenheit() {
  var c = parseFloat(document.getElementById("celsius").value);
  if (isNaN(c)) {
    document.getElementById("result1").innerHTML = "Please enter a number.";
    return;
  }
  var f = (c * 9 / 5) + 32;
  document.getElementById("result1").innerHTML = c + " °C = " + f.toFixed(2) + " °F";
}

function fahrenheitToCelsius() {
  var f = parseFloat(document.getElementById("fahrenheit").value);
  if (isNaN(f)) {
    document.getElementById("result2").innerHTML = "Please enter a number.";
    return;
  }
  var c = (f - 32) * 5 / 9;
  document.getElementById("result2").innerHTML = f + " °F = " + c.toFixed(2) + " °C";
}

function metersToFeet() {
  var m = parseFloat(document.getElementById("meters").value);
  if (isNaN(m)) {
    document.getElementById("result3").innerHTML = "Please enter a number.";
    return;
  }
  var ft = m * 3.28084;
  document.getElementById("result3").innerHTML = m + " m = " + ft.toFixed(2) + " ft";
}

function feetToMeters() {
  var ft = parseFloat(document.getElementById("feet").value);
  if (isNaN(ft)) {
    document.getElementById("result4").innerHTML = "Please enter a number.";
    return;
  }
  var m = ft / 3.28084;
  document.getElementById("result4").innerHTML = ft + " ft = " + m.toFixed(2) + " m";
}


// Assignment #2 - Income Tax Calculator

function formatPeso(amount) {
  return "PHP " + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function computeTax() {
  var income = parseFloat(document.getElementById("income").value);
  if (isNaN(income) || income < 0) {
    alert("Please enter a valid income.");
    return;
  }

  var tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 400000) {
    tax = (income - 250000) * 0.15;
  } else if (income <= 800000) {
    tax = 22500 + (income - 400000) * 0.20;
  } else if (income <= 2000000) {
    tax = 102500 + (income - 800000) * 0.25;
  } else if (income <= 8000000) {
    tax = 402500 + (income - 2000000) * 0.30;
  } else {
    tax = 2202500 + (income - 8000000) * 0.35;
  }

  document.getElementById("taxIncome").innerHTML = formatPeso(income);
  document.getElementById("taxAmount").innerHTML = formatPeso(tax);
  document.getElementById("taxAfter").innerHTML = formatPeso(income - tax);
}


// Assignment #3 - Loops

function getN() {
  var n = parseInt(document.getElementById("n").value);
  if (isNaN(n) || n < 1) {
    document.getElementById("result5").innerHTML = "Please enter a positive whole number.";
    return null;
  }
  return n;
}

// Factorial using a while loop
function factorialWhile() {
  var n = getN();
  if (n === null) return;

  if (n > 170) {
    document.getElementById("result5").innerHTML = "That number is too big. Please use 170 or lower.";
    return;
  }

  var result = 1;
  var i = 1;
  while (i <= n) {
    result = result * i;
    i++;
  }
  document.getElementById("result5").innerHTML = "Factorial of " + n + " = " + result.toLocaleString("en-US");
}

// Sum using a do while loop
function sumDoWhile() {
  var n = getN();
  if (n === null) return;

  var sum = 0;
  var i = 1;
  do {
    sum = sum + i;
    i++;
  } while (i <= n);
  document.getElementById("result5").innerHTML = "Sum of the first " + n + " natural numbers = " + sum.toLocaleString("en-US");
}

// Average using a for loop
function averageFor() {
  var n = getN();
  if (n === null) return;

  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  var average = sum / n;
  document.getElementById("result5").innerHTML = "Average of the first " + n + " natural numbers = " + average;
}


// Assignment #4 - Simple Payroll

function computePay() {
  var name = document.getElementById("name").value;
  var hours = parseFloat(document.getElementById("hours").value);
  var rate = parseFloat(document.getElementById("rate").value);

  if (name === "" || isNaN(hours) || isNaN(rate) || hours < 0 || rate < 0) {
    alert("Please fill in all the fields with valid values.");
    return;
  }

  var regularHours = hours;
  var overtimeHours = 0;
  if (hours > 40) {
    regularHours = 40;
    overtimeHours = hours - 40;
  }

  var regularPay = regularHours * rate;
  var overtimePay = overtimeHours * rate * 1.5;
  var grossPay = regularPay + overtimePay;

  var sss = grossPay * 0.045;
  var philhealth = grossPay * 0.025;
  var pagibig = grossPay * 0.02;
  var totalDeductions = sss + philhealth + pagibig;
  var netPay = grossPay - totalDeductions;

  document.getElementById("pEmployee").innerHTML = name;
  document.getElementById("pRegular").innerHTML = formatPeso(regularPay);
  document.getElementById("pOvertime").innerHTML = formatPeso(overtimePay);
  document.getElementById("pGross").innerHTML = formatPeso(grossPay);
  document.getElementById("pSSS").innerHTML = formatPeso(sss);
  document.getElementById("pPhilhealth").innerHTML = formatPeso(philhealth);
  document.getElementById("pPagibig").innerHTML = formatPeso(pagibig);
  document.getElementById("pDeductions").innerHTML = formatPeso(totalDeductions);
  document.getElementById("pNet").innerHTML = formatPeso(netPay);
}

function clearPay() {
  document.getElementById("name").value = "";
  document.getElementById("hours").value = "";
  document.getElementById("rate").value = "";

  var ids = ["pEmployee", "pRegular", "pOvertime", "pGross", "pSSS", "pPhilhealth", "pPagibig", "pDeductions", "pNet"];
  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).innerHTML = "?";
  }
}
