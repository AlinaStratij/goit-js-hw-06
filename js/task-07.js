const fontSizeControl = document.querySelector(`#font-size-control`);
const textControl = document.querySelector(`#text`);

fontSizeControl.addEventListener(`input`, inputChange);
function inputChange() {
 textControl.style.fontSize = "${fontSizeControl.value}px";
}
fontSizeControl.addEventListener(`input`, () => {
    textControl.style.fontSize = `${fontSizeControl.value}px`;
})
