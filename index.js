// Code your solution in this file!

const returnFirstTwoDrivers = (drivers)=>{
    const newArr = []
    let l1 = `${drivers[0]}`
    let l2 = `${drivers[1]}`
    newArr.push(l1)
    newArr.push(l2)
    return newArr
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const returnLastTwoDrivers = (drivers)=>{
    const newArr = []
    let l1 = `${drivers[2]}`
    let l2 = `${drivers[3]}`
    newArr.push(l1)
    newArr.push(l2)
    return newArr
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (fareMultiplier) {
    return function(cost) {
        return fareMultiplier * cost;
      }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, drive) {
  return drive(drivers);
}

console.log(createFareMultiplier()())
