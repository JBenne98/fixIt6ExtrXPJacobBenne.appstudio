let myNumbers = [36, 56, 117, 324, 183, 231, 72, 111, -10, 207]

let userChoice = prompt('Would you like to sum all numbers or average them (Input sum or average)')

if (userChoice === 'sum') {
  let sum = myNumbers.reduce(function(a, b){return a + b}, 0)
  alert(`The sum of the 10 numbers is ${sum}`)
} else if (userChoice === 'average'){
  let avg = myNumbers.reduce(function(a, b){return a + b}, 0)/myNumbers.length
  alert(`The average of the 10 numbers is ${avg}`)
} else {
  alert('Input either sum or average')
}

let addNum = prompt('Give a number')
myNumbers.push(parseInt(addNum))
let addNum1 = prompt('Give a number')
myNumbers.push(parseInt(addNum1))
let addNum2 = prompt('Give a number')
myNumbers.push(parseInt(addNum2))
console.log(myNumbers)
alert(myNumbers[myNumbers.length-1]+10)
