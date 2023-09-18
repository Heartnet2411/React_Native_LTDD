var avgPoint = (arr) => {
    var totalPoint = 0
    for (var i = 0; i < arr.length; i++) {
        totalPoint += arr[i]
    }
    return totalPoint / arr.length
}

var compareAvgPoint = (Dolphins, Koalas) => {
    if (Dolphins > Koalas) {
        console.log("Dolphins team win!");
    } else if (Koalas > Dolphins) {
        console.log("Koalas team win!");
    } else {
        console.log("DRAW");
    }
}

console.log("Data 1");
var Dolphins = [96, 108, 89]
var Koalas = [88, 91, 110]

var avgDolphins = avgPoint(Dolphins)
var avgKoalas = avgPoint(Koalas)

compareAvgPoint(avgDolphins, avgKoalas)

//////////////////////////////////
console.log("Bouns data 1");
var compareAvgPoint = (Dolphins, Koalas) => {
    if (Dolphins > Koalas) {
        if (Dolphins >= 100 && Koalas >= 100) {
            console.log("Dolphins team win!");
        } else if (Dolphins < 100) {
            console.log("NO TEAM WIN!");
        }
    } else if (Koalas > Dolphins) {
        if (Dolphins >= 100 && Koalas >= 100) {
            console.log("Koalas team win!");
        } else if (Koalas < 100) {
            console.log("NO TEAM WIN!");
        }

    } else if (Dolphins >= 100 && Koalas >= 100) {
        console.log("DRAW");
    } else {
        console.log("NO TEAM WIN!");
    }
}

Dolphins = [97, 112, 101]
var Koalas = [109, 95, 123]

avgDolphins = avgPoint(Dolphins)
avgKoalas = avgPoint(Koalas)

compareAvgPoint(avgDolphins, avgKoalas)

/////////////////////////////
console.log("Data bouns 2");

Dolphins = [97, 112, 101]
var Koalas = [109, 95, 106]

avgDolphins = avgPoint(Dolphins)
avgKoalas = avgPoint(Koalas)

compareAvgPoint(avgDolphins, avgKoalas)