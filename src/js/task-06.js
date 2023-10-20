const refs = {
    input: document.querySelector('input#validation-input')
}

refs.input.addEventListener('blur', validateInput)

function validateInput() {
    if (this.value.length === Number(this.dataset.length)) {
        this.classList.remove('invalid')
        this.classList.add('valid')
    }
    else {
        this.classList.remove('valid')
        this.classList.add('invalid')
    }
}