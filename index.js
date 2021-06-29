

// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0,2);
// }

// const returnLastTwoDrivers = function(drivers){
//     return drivers.slice(drivers.length-2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(int) {
//     return function(fare) {
//         return int * fare;
//     }
// }

// function fareDoubler(fare) {
//     const doubledFare = createFareMultiplier(2)(fare);
//     return doubledFare;
// }

// function fareTripler(fare) {
//     const tripledFare = createFareMultiplier(3)(fare);
//     return tripledFare;
// }

// function selectDifferentDrivers(drivers, driverFunction) {
//     return driverFunction(drivers);
// }


const returnFirstTwoDrivers = function(drivers){return drivers.slice(0,2);}

const returnLastTwoDrivers =function(drivers){return drivers.slice(-2);}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return int * fare;
    }
}

function fareDoubler(fare) {
    const doubledFair = createFareMultiplier(2)(fare);
    return doubledFair;
}

function fareTripler(fare) {
    const tripledFair = createFareMultiplier(3)(fare);
    return tripledFair;
}

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers);
}