const refs= {
    input: document.querySelector('input#font-size-control'),
    textElement: document.querySelector('span#text')
}

refs.textElement.style.fontSize = refs.input.value + 'px'

refs.input.addEventListener('input', changeFontSize)

function changeFontSize() {
    refs.textElement.style.fontSize = this.value + 'px'
}