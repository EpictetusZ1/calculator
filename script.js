const clearBtn = document.getElementById("all-clear")
const posNegBtn = document.getElementById("pos-neg-int")
const percentBtn = document.getElementById("percent")
const divideBtn = document.getElementById("division")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")
const multiplyBtn = document.getElementById("multiply")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const subtractBtn = document.getElementById("minus")
const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const addBtn = document.getElementById("addition")
const zeroBtn = document.getElementById("zero")
const decimalBtn = document.getElementById("decimal")
const equalsBtn = document.getElementById("equals")

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function percentage(num1) {
    return num1 / 100
}

function operate(num1, operation, num2) {
    return operation(num1, num2)
}

const displayContent = document.getElementById("result-display")

clearBtn.addEventListener("click", () => displayContent.textContent = "")

let valueArray = []
let currValue

oneBtn.addEventListener("click",() => valueArray.push(1))
twoBtn.addEventListener("click",() => valueArray.push(2))
threeBtn.addEventListener("click",() => valueArray.push(3))
fourBtn.addEventListener("click",() => valueArray.push(4))
fiveBtn.addEventListener("click",() => valueArray.push(5))
sixBtn.addEventListener("click",() => valueArray.push(6))
sevenBtn.addEventListener("click",() => valueArray.push(7))
eightBtn.addEventListener("click",() => valueArray.push(8))
nineBtn.addEventListener("click",() => valueArray.push(9))
zeroBtn.addEventListener("click",() => {
    if (valueArray.length > 0) {
        valueArray.push(0)
    }
})

const allNumBtn = document.querySelectorAll(".num-btn")

allNumBtn.forEach((btn) => btn.addEventListener("click", getNumVal))

function displayNum(currVal) {
    displayContent.textContent = currVal.toString()
}

function getNumVal() {
    if (this === zeroBtn && valueArray.length === 0) {
        currValue = 0
        return currValue
    } else if (valueArray[0] !== 0) {
        currValue = parseInt(valueArray.join(''))
        displayNum(currValue)
        return currValue
    }
}
