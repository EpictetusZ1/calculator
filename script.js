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

const displayContent = document.getElementById("result-display")
const allBtn = document.querySelectorAll(".calc-button")
const allOperators = document.querySelectorAll(".operator")
const allNumBtn = document.querySelectorAll(".num-btn")
const startVal = 0

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
    if (num1 === 0 || num2 === 0) {
        clearAllBtn()
        displayContent.textContent = "ERROR: Dividing by Zero has harmful side effects"
        return 0
    }
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
    switch (operation) {
        case 1:
            return add(num1, num2)
        case 2:
            return subtract(num1, num2)
        case 3:
            return multiply(num1, num2)
        case 4:
            return divide(num1, num2)
    }
}

clearBtn.addEventListener("click", clearAllBtn)

const formattedNum = new Intl.NumberFormat('en-US')

let valueArray = []
let evaluated = false
let operandOne = null
let operandTwo = null
let operation = null
let result = null
let decimal = false

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

decimalBtn.addEventListener("click", () => {
    if (! decimal) {
        valueArray.push(".")
        decimal = true
    }
})

function clearScreen() {
    displayContent.textContent = startVal.toString()
    valueArray = []
    if (operation) {
        clearValues()
    }
}

function clearValues() {
    operandOne = null
    operandTwo = null
    result = null
    evaluated = false
    decimal = false
}

function clearAllBtn() {
    displayContent.textContent = startVal.toString()
    valueArray = []
    evaluated = false
    operandOne = null
    operandTwo = null
    operation = null
    result = null
    decimal = false
}

allOperators.forEach((btn) => btn.addEventListener("click", holdOperation))
allNumBtn.forEach((btn) => btn.addEventListener("click", holdValue))

function displayNum(currVal) {
    currVal = formattedNum.format(currVal)
    displayContent.textContent = currVal.toString()
}

function holdValue() {
    let currValue
    if (valueArray.length === 0) {
        currValue = 0
        displayNum(currValue)
        return operandOne = currValue
    }  else {
        currValue = parseFloat(valueArray.join(""))
        displayNum(currValue)
        if (! operation && ! evaluated) {
            return operandOne = currValue
        } else if (operandOne) {
            return operandTwo = currValue
        }
    }
}

function holdOperation() {
    clearScreen()
    if (this === addBtn) {
         operation = 1
    } else if (this === subtractBtn) {
         operation = 2
    } else if (this === multiplyBtn) {
         operation = 3
    } else if (this === divideBtn) {
         operation = 4
    }
}

equalsBtn.addEventListener("click",() => result = operate(operandOne, operandTwo))
equalsBtn.addEventListener("click", () => {
    if (result) {
        displayNum(result)
        evaluated = true
        operation = null
        operandOne = result
    }
})

posNegBtn.addEventListener("click", posNegInt)

function posNegInt() {
    if (! operation) {
        if (operandOne > 0) {
            operandOne = -Math.abs(operandOne)
        } else if (operandOne < 0) {
            operandOne = Math.abs(operandOne)
        }
        return displayNum(operandOne)
    } else if (operation) {
        if (operandTwo > 0) {
            operandTwo = -Math.abs(operandTwo)
        } else if (operandTwo < 0) {
            operandTwo = Math.abs(operandTwo)
        }
        return displayNum(operandTwo)
    }
}

allBtn.forEach((btn) => btn.addEventListener("click", () => {
    btn.classList.add("shadowed")
    setTimeout(() => btn.classList.remove("shadowed"), 200)
}))
