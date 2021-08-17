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

percentBtn.addEventListener("click", () => {
    if (operandOne) {
        operandOne = percentage(operandOne)
        return displayNum(operandOne)
    }
})

function operate(num1, num2) {
    if (operation === 1) {
        return add(num1, num2)
    } else if (operation === 2) {
        return subtract(num1, num2)
    } else if (operation === 3) {
        return multiply(num1, num2)
    } else if (operation === 4) {
        if (num1 === 0 || num2 === 0) {
            displayContent.textContent = "YOU SHALL NOT PASS"
            evaluated = false
            return clearValues()
        }
        return divide(num1, num2)
    }
}

const displayContent = document.getElementById("result-display")

clearBtn.addEventListener("click", clearScreen)

function clearScreen() {
    displayContent.textContent = startVal.toString()
    valueArray = []
    if (! evaluated) {
        clearValues()
    }
}

function clearValues() {
    if (operation) {
        operandOne = null
        operandTwo = null
        operation = null
        result = null
    }
}

const startVal = 0

let valueArray = []
let evaluated = false
let operandOne
let operandTwo
let operation
let result

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

allNumBtn.forEach((btn) => btn.addEventListener("click", holdValue))

function displayNum(currVal) {
    displayContent.textContent = currVal.toString()
}

function holdValue() {
    let currValue
    if (valueArray.length === 0) {
        currValue = 0
        displayNum(currValue)
        return operandOne = currValue
    }  else {
        currValue = parseInt(valueArray.join(""))
        displayNum(currValue)
        if (! operation) {
            return operandOne = currValue
        } else if (operandOne) {
            return operandTwo = currValue
        }
    }
}

const allOperators = document.querySelectorAll(".operator")

allOperators.forEach((btn) => btn.addEventListener("click", holdOperation))

function holdOperation() {
    clearScreen()
    if (this === addBtn) {
        return operation = 1
    } else if (this === subtractBtn) {
        return operation = 2
    } else if (this === multiplyBtn) {
        return operation = 3
    } else if (this === divideBtn) {
        return operation = 4
    }
}

equalsBtn.addEventListener("click",() => result = operate(operandOne, operandTwo))
equalsBtn.addEventListener("click", () => {
    if (result) {
        displayNum(result)
        evaluated = true
        operandOne = result
    }
})

posNegBtn.addEventListener("click", () => {
    if (! operandTwo) {
        if (operandOne > 0) {
            operandOne = -Math.abs(operandOne)
        } else {
            operandOne = Math.abs(operandOne)
        }
        displayNum(operandOne)
    } else if (operandTwo) {
        if (operandTwo > 0) {
            operandTwo = -Math.abs(operandTwo)
        } else {
            operandTwo = Math.abs(operandTwo)
        }
        displayNum(operandTwo)
    }
})

const allBtn = document.querySelectorAll(".calc-button")

allBtn.forEach((btn) => btn.addEventListener("click", () => {
    btn.classList.add("shadowed")
    setTimeout(() => btn.classList.remove("shadowed"), 200)
}))