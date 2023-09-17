// Define the calcTip function
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.20;
  }
}

// Test the calcTip function with a bill value of 100
const testBill = 100;
const tipForTestBill = calcTip(testBill);
console.log(`Tip for a bill of $${testBill} is $${tipForTestBill}`);

/////////////////////////////
const bills = [125, 555, 44];

const tips = bills.map(calcTip);

const total = bills.map((bill, index) => bill + tips[index]);

console.log("Tips for the bills:", tips);
console.log("Total values for the bills:", total);
