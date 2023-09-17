const calcAverage = (a, b, c) => (a + b + c) / 3;

const compareAvgPoint =  (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// Data 1
console.log("Data 1");
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

compareAvgPoint(scoreDolphins, scoreKoalas);

// Data 2
console.log("Data 2");
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

compareAvgPoint(scoreDolphins, scoreKoalas);