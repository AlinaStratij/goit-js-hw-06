        
const inputVal = document.querySelector("#validation-input");

inputVal.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length === +inputVal.dataset.length) {
    inputVal.classList.add("valid");
      inputVal.classList.remove("invalid");
       inputVal.style.color = "green";

   
      
  } else {
    inputVal.classList.add("invalid");
      inputVal.classList.remove("valid");
     inputVal.style.color="red" 
  }
}



