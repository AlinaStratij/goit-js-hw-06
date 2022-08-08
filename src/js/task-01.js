const categList = document.querySelector(`#categories`);
console.log(`Number of categories: ${categList.children.length}`);
const nawArr = [...categList.children]
nawArr.forEach((elem => {
    console.log(`Category:${elem.children[0].textContent}`);
    console.log(`Elements:${elem.children[1].children.length}`)
}))




