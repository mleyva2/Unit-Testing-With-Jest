// this is my function that sums two numbers
//const sum = (a,b) => {
    //return a + b
//}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
    let value = dollar/1.2;
    let yen = value*127.9;
    return yen; 
}

function fromEuroToDollar(euro){
    let value = euro * 1.2;
    return value; 
}

function fromYenToPound(yen){
    let value = yen/127.9;
    let pound = value*0.8;
    return pound; 
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound }