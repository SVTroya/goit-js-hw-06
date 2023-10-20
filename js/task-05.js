const refs = {
    input: document.querySelector('input#name-input'),
    name: document.querySelector('span#name-output')
}

refs.input.addEventListener('input', showInputText)

function showInputText() {
 refs.name.textContent = this.value || "Anonymous"
}