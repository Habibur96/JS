
// Problem - 1

function anaToVori(ana) {
    if (ana == 0 || ana < 1) {
        return (console.log("Please, enter tha ana greater than 0"));
    }
    var vori = ana / 16;
    return vori;
}

var vori = anaToVori(8);
console.log(vori);

//  Problem - 2

function pandaCost(singaraPrice, somochaPrice, jilapiPrice) {


    var singara = singaraPrice * 2;
    var somocha = somochaPrice * 3;
    var jilapi = jilapiPrice * 3;

    var sum = singara + somocha + jilapi;
    return sum;
}

var totalCost = pandaCost(7, 10, 15);
console.log(totalCost);

// Problem - 3

function picnicBudget(quantity) {
    if (quantity <= 100) {
        var totalCost = quantity * 5000;
        return totalCost;
    }

    else if (quantity > 100 && quantity <= 200) {
        var firstHundredCost = 100 * 5000;
        var hundredOverCost = quantity - 100;
        cost = hundredOverCost * 4000;

        var totalCost = firstHundredCost + cost;
        return totalCost;
    }

    else if (quantity > 200) {
        var firstHundredCost = 100 * 5000;
        var secondHundredCost = 100 * 4000;
        var secondHundredOver = quantity - 200;
        var secondHundredOverCost = secondHundredOver * 3000;

        var totalCost = firstHundredCost + secondHundredCost + secondHundredOverCost;
        return totalCost;
    }
}

var a = picnicBudget(350);
console.log(a);


// Problem - 4

function oddFriend(name) {
    for (var i = 0; i < name.length; i++) {
        var indexOfElement = name[i]
        var sizeOfName = indexOfElement.length;
        if (sizeOfName % 2 != 0) {
            return name[i];
            break;
        }
    }
}

var name = ["Abir", "Mahi", "Noyon", "Nahid", "Anik"];
var oddname = oddFriend(name);
console.log(oddname);
