var caculateBMI = (mass, height) => {
    return mass / (height * height)
}

var compareBMI = (mark, john) => {
    if (mark > john) {
        return true
    } else {
        return false
    }
}

console.log("Data 1");

var Mark = {
    weight: 78,
    height: 1.69
}

var John = {
    weight: 95,
    height: 1.88
}

var BMIofMark = caculateBMI(Mark.weight, Mark.height)

var BMIofJohn = caculateBMI(John.weight, John.height)

if (compareBMI(BMIofMark, BMIofJohn)) {
    console.log("Mark's BMI (" + BMIofMark + ") is higher than John's (" + BMIofJohn + ")!");
} else {
    console.log("John's BMI (" + BMIofJohn + ") is higher than Mark's (" + BMIofMark + ")!", );
}

/////////////////////////////
console.log("Data 2");

Mark = {
    weight: 95,
    height: 1.88
}

John = {
    weight: 85,
    height: 1.76
}

BMIofMark = caculateBMI(Mark.weight, Mark.height)

BMIofJohn = caculateBMI(John.weight, John.height)

if (compareBMI(BMIofMark, BMIofJohn)) {
    console.log("Mark's BMI (" + BMIofMark + ") is higher than John's (" + BMIofJohn + ")!");
} else {
    console.log("John's BMI (" + BMIofJohn + ") is higher than Mark's (" + BMIofMark + ")!", );
}