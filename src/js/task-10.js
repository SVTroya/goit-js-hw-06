const refs = {
    input: document.querySelector('input'),
    buttonCreate: document.querySelector('button[data-create]'),
    buttonDestroy: document.querySelector('button[data-destroy]'),
    box: document.querySelector('div#boxes')
}

let divSize = 30

refs.buttonCreate.addEventListener('click', onCreateClicked )
refs.buttonDestroy.addEventListener('click', destroyBoxes)

function onCreateClicked() {
    createBoxes(refs.input.value)
}
function createBoxes(amount) {
    const divNodes = []
    for (let i = 0; i < amount; i++) {
        divNodes.push(constructBox())
        divSize += 10
    }
    refs.box.append(...divNodes)
}

function constructBox() {
    const div = document.createElement('div')
    div.style.width = divSize + 'px'
    div.style.height = divSize + 'px'
    div.style.backgroundColor = getRandomHexColor()
    div.style.marginBottom = '10px'
    return div
}

function destroyBoxes() {
    refs.box.innerHTML = ''
    divSize = 30
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
