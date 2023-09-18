const mark = {
  name: 'Mark',
  mass: 78, 
  height: 1.69, 
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  name: 'John',
  mass: 92, 
  height: 1.95, 
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.name}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.name}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.name}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.name}'s (${mark.bmi.toFixed(1)})!`);
} else {
  console.log(`${mark.name} and ${john.name} have the same BMI of ${mark.bmi.toFixed(1)}.`);
}
