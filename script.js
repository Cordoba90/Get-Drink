let money = prompt("How much money do you have?")
let price = 8;
function calcBottles (money , price) {
 return Math.floor(money / price)
}
console.log(calcBottles(money,price))

let bottles = calcBottles(money , price)
function calcChange (money,price) {
  return money - (price * bottles)
}
console.log(calcChange(money,price))
let change = calcChange(money,price)
function getDrink () {
  return (`Leave House\nTurn left\ngo to the market\nbuy ${bottles} bottles of drink\npay ${money}USD for drink\nleave market\ncome back to the House\nHello master,here is your ${change}USD change`)
}
console.log(getDrink())