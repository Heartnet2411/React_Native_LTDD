function printForecast(arr) {
  let forecastString = "";
  for (let i = 0; i < arr.length; i++) {
    forecastString += ' ${arr[i]}°C in ${i + 1} day(s) ---';
  }
  console.log(forecastString);
}

// Test data 1
const data1 = [17, 21, 23];
console.log("Data 1:");
printForecast(data1);

// Test data 2
const data2 = [12, 5, -5, 0, 4];
console.log("\nData 2:");
printForecast(data2);
