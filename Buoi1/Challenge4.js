var caculateTips = (bill) => {
    var tips
    if (bill >= 50 && bill <= 300) {
        tips = bill * 0.15
        return bill + tips
    } else {
        tips = bill * 0.2
        return bill + tips
    }
}

console.log("1");
var bill = 275
console.log("Toal bill is: ", caculateTips(bill))

console.log("2");
var bill = 40
console.log("Toal bill is: ", caculateTips(bill))

console.log("3");
var bill = 430
console.log("Toal bill is: ", caculateTips(bill))