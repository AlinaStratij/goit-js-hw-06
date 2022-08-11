let counterValue = 0;
const value = document.querySelector(`#value`);
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);

btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
     value.textContent = counterValue;
})
btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
     
});
