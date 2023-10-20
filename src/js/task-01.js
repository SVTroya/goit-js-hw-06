const categoryNodes = document.querySelectorAll("ul#categories .item")
console.log(`Number of categories: ${categoryNodes.length}`)
for(const categoryNode of categoryNodes) {
    const titleNode = categoryNode.querySelector("h2")
    const listNode = categoryNode.querySelector("ul")
    console.log(`\n`)
    console.log(`Category: ${titleNode.textContent}`)
    console.log(`Elements: ${listNode.children.length}`)
}

