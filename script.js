/*
let johnMass = 24;
let markMass = 20;
let johnHeight = 3;
let markHeight = 2;

let johnBmi = johnMass / johnHeight * johnHeight;
let markBmi = markMass / markHeight * markHeight;
let isMarkBmiHigher = markBmi > johnBmi;
if (isMarkBmiHigher === true){
    console.log("Mark's BMI is higher")
}else {
    console.log("John's BMI is higher")
}
console.log(johnBmi, markBmi);
console.log("Is mark BMI higher than Johns" + ' ' + isMarkBmiHigher);
*/


/*
let johnsTeam = 89 + 120 + 103;
let mikeTeam = 116 + 94 + 123;
let johnsTeamAvg = johnsTeam / 3;
let mikeTeamAvg = mikeTeam / 3;
if (johnsTeamAvg > mikeTeamAvg) {
    console.log("john\'s team is the winner")
}
else {
    console.log("mike\'s Team is the winner")
}
console.log(johnsTeamAvg, mikeTeamAvg);
*/



/*
let johnBill = [124, 48, 268];
let tips = function (bill) {
    if (bill <= 50) {
       return  bill + 0.2 * bill;
    }else if (bill > 50 && bill <= 200){
        return bill + 0.15 * bill;
    } else if(bill > 200){
        return bill + 0.10 * bill;
    }
}
 let tipOne = tips(johnBill[0]);
 let tipTwo = tips(johnBill[1]);
 let tipThree = tips(johnBill[2]);

 let johnFinalPayment = [tipOne, tipTwo, tipThree];
 console.log(johnFinalPayment);
 */


//sum of numbers in an array//

let arr = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);

/*for (let i =0; i <= 10; i++){
    if (i%2===0){
        console.log(i);
    }
}*/

for (let i = 1; i <= 12; i++) {
    console.log(i * 2);
}
for (let i = 1; i <= 12; i++) {
    console.log(i * 3);
}


let johnFamily = {
    fullName: 'John Doe',
    restaurantBill: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];
        for (let i = 0; i < this.restaurantBill.length; i++) {
            let percentage;
            if (this.restaurantBill[i] < 50) {
                percentage = 0.2;
            } else if (this.restaurantBill[i] >= 50 && this.restaurantBill[i] <= 200) {
                percentage = 0.15;
            } else if (this.restaurantBill[i] > 200) {
                percentage = 0.1;
            }
            this.tips[i] = percentage * this.restaurantBill[i];
            this.finalValue[i] = this.tips[i] + this.restaurantBill[i];
        }
    }
}
johnFamily.calcTips()
console.log(johnFamily.tips, johnFamily.finalValue);


let mark = {
    firstName: 'mark',
    lastName: 'nndigbo',
    mass: 150,
    height: 3,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
}
mark.calcBmi();

let john = {
    firstName: 'john',
    lastName: "doe",
    mass: 200,
    height: 2,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
}
john.calcBmi();
console.log(john, mark);

let kilometer = 25;
let converterkmToMiles = function() {
    let convert = kilometer * 0.62137119;
    return convert;
}
console.log(converterkmToMiles());

let numbers = [2, 3, 4, 6, 8, -1, -4, -8, -10]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        console.log(numbers[i]);
    }
}

let divisibleBy10 = [20, 30, 40, 25, 23, 12, 21];
for (let i = 0; i < divisibleBy10.length; i++) {
    let divisibleByTen;
    if (divisibleBy10[i] % 10 === 0) {
        divisibleByTen = true;
    } else {
        divisibleByTen = false;
    }
    console.log(divisibleByTen);
}

function strings(a, n) {
    return a[n];
}
let funx = strings("school", 2);
console.log(funx);

let propertyCheck = function checkProperty(a, b) {
    if (a.hasOwnProperty(b)) {
        return true;
    }
}

console.log(propertyCheck({ x: "gentle", y: "cool", c: "hi" }), "hi");

let schools = "bookfield";
let schoolReverse = schools.repeat(6);
console.log(schoolReverse);

let num = 50;

// for (i = 0; i < num; i++) {
//     if (i)
// }

let listOfNumbers = [1, 2, 3, 4, 6]
listOfNumbers.unshift(7)
console.log(listOfNumbers)

function destructFunc({ first, second }) {
    return first + " " + second
}
let user = {
    "first": "Tolu",
    "second": "Ayeni"
}

let testDestructuring = destructFunc(user)
console.log(testDestructuring)


const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randLength = 8;
let randWord = ""
for (let index = 0; index < randLength; index++) {
    let randomLetter = Math.floor(Math.random() * character.length)
    randWord += character[randomLetter];
}
console.log(randWord)

let scores = [4, 6, 7]
let scoreTotal = 0;
for (let index = 0; index < scores.length; index++) {
    scoreTotal += scores[index];
}
console.log(scoreTotal)

let cart = [{
        name: "book1",
        quantity: 3,
        price: 10
    },
    {
        name: "book2",
        quantity: 4,
        price: 12
    },
    {
        name: "book3",
        quantity: 4,
        price: 13
    }
]

let calcItemPrice = cart.reduce(function(accumulator, item) {
        let sumit = accumulator + item.price * item.quantity
        console.log(sumit)
        return sumit
    },
    0);

let arrayNumbers = [4, 7, 9, 12, 19, 17, 23, 2, 4, 11, 12, 21]
let filteredNum = arrayNumbers.filter(function(currentVal) {
    return currentVal < 12;
})
console.log(filteredNum)

let arrayNum = [4, 7, 9, 12, 19, 17, 23, 2, 4, 11, 12, 21]
let filteredNumWithEsix = arrayNum.filter((currentVal) => {
    return currentVal > 8;
})
console.log(filteredNumWithEsix)

let newNum = []
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] < 8) {
        newNum.push(arrayNumbers[index])
    }
}
console.log(newNum)

function testing(arr) {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            if (!newArr.includes(arr[index])) {
                newArr.push(arr[index])
            }
        }
    }
    return newArr
}

let arrTest = [2, 4, 5, 7, 8, 12, 21, 33, 12, 14]
let funcTest = testing(arrTest)
console.log(funcTest)

let arrayCheck = []
arrayCheck.push(25)
if (arrayCheck.length === 0) {
    console.log(true)
} else {
    console.log(false)
}

let colors = ["orange", "brown", "red", "green", "yellow", "green", "purple"]

function changeColor() {
    let pickColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.background = pickColor;
}

let btnText = document.getElementById("bton")

function changeBtnText() {
    btnText.textContent = "Button Clicked"
}

let date = new Date;
let displayTime = date;
document.getElementById("timed").innerHTML = displayTime
console.log("from IDE")