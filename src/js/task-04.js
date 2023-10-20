let counterValue = 0
const refs = {
    buttonMinus: document.querySelector('button[data-action="decrement"]'),
    buttonPlus: document.querySelector('button[data-action="increment"]'),
    result: document.querySelector('span#value')
}

refs.buttonMinus.addEventListener('click', subtraction)
refs.buttonPlus.addEventListener('click', adding)

function subtraction() {
    counterValue--
    showResult(counterValue)
}

function adding() {
    counterValue++
    showResult(counterValue)
}

function showResult(result) {
    refs.result.textContent = result
}
