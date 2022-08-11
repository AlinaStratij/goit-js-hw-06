const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
input.addEventListener(`input`,onInputChange)
function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (input.value === '') {
        return (output.textContent = "Anonymous");
    } else {
        output.textContent = event.currentTarget.value;
    }
}