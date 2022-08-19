console.log("testing testing")
    //conditional statement
let age = 16
if (age >= 18) {
    console.log("You be elder, so you can vote")
} else {
    console.log("sorry, you can't vote")
}
//ternary operator
let statu = age >= 18 ? "major" : "minor"
console.log(statu)
    //template literal
let partyMan = `He is a ${age >= 18 ? "major" : "minor"}, He can ${age >= 18 ? " " : "not"} vote`
console.log(partyMan)
    //Switch Case
let currentDay = "Monday"
switch (currentDay) {
    case "Monday":
    case "Tuesday":
        console.log("It's a week day")
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's weekend, Enjoy")
        break;
    default:
        console.log("You good")
}
//loops
for (let index = 0; index < 20; index++) {
    const element = index;
    console.log(element)
}
let count = 1
while (count <= 10) {
    console.log(count)
    count++
}
outerLoop: for (let index = 0; index < 10; index++) {
        for (let ind = 0; ind < 10; ind++) {
            if (index === ind) {
                break outerLoop
                console.log(index, ind)
            }
        }

    }
    //FUNCTIONS
function sum(a, b) {
    let value = a + b
    return value
}
let sumCheck = sum(3, 5)
console.log(sumCheck)

function sayHi() {
    return "Hi"
}

let callingSayHiFunction = sayHi()
console.log(callingSayHiFunction)

let funcExpression = function(a, b) {
    return a * b;
}
let funExpTest = funcExpression(5, 6)
console.log(funExpTest)

let divideFunc = (a, b) => {
    let divide = a / b
    return divide
}

let callDivideFunc = divideFunc(70, 5)
console.log(callDivideFunc)

//OBJECTS
const newUserData = "gender"
const userInfo = {
    name: "Bankole",
    age: 25,
    "isMarried": true,
    [newUserData]: "Male",
    shoot: () => {
        console.log("I can shoot")
    },
    talk() {
        console.log("I can talk, but I can't shout")
    }
}
let accessName = userInfo.name
console.log(accessName)
console.log(userInfo)
for (const key in userInfo) {
    console.log(`${key} ---> ${userInfo[key]}`)
}
console.log(userInfo.shoot())

let newUserObj = {
    name: "Bolu",
    surname: "Ayeni"
}
newUserObj.name = "Pete"
console.log(newUserObj)
delete newUserObj.name
console.log(newUserObj)

let salaries = {
    Tolu: 2000,
    Basit: 18000,
    Ayo: 15000
}
let sumSalaries = salaries.Ayo + salaries.Basit + salaries.Tolu;
let sumSal = 0;
for (const key in salaries) {
    sumSal += salaries[key]
}
console.log(sumSal)
console.log(sumSalaries)
let menu = {
    width: 200,
    height: 300,
    title: "my Menu"
}

function multiplyNumVal(obj) {
    for (const key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2
        }
    }
}


let checker = multiplyNumVal(menu)
console.log(menu)

//this Key word
//NOTE: Use a 'function' declaration when declaring a method in an object
const userData = {
    firstName: 'Bolu',
    lastName: "Akande",
    age: 25,
    gender: "F",
    fullName: function() {
        const title = () => {
            return this.gender === "M" ? "Mr" : "Mrs";
        }
        return title() + " " + this.firstName + " " + this.lastName
    }
}
console.log(userData.fullName())

let strings = "hello"
let padString = strings.padEnd(10, " Tolu")
console.log(padString)

//ARRAYS
const arrVar = new Array(5);
let arrys = [2, 4, 5, 6, 7, 8, 12, 1, 23]
let accessarrElement = arrys[4]
console.log(accessarrElement)
let filtereArrs = arrys.map((item, index) => {
    return item * 2
})

let reduceArrs = arrys.reduce((acc, item) => {
    return acc + item
}, 0)
let fruits = ["mango", "apple", "orange", "cucumber", "pineapple"]
let reduced = fruits.reduce((acc, item) => (acc.length >= item.length ? acc : item))
console.log(filtereArrs)
console.log(reduceArrs)
console.log(reduced)