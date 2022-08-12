// const form = document.querySelector(`.login-form`);
// console.log(form);
// form.addEventListener(`submit`, onFormSubmit);
// const infoRef = {};
// function onFormSubmit(event) {
//     event.preventDefault();
//     const inputFirstName = form.elements[0].name;
//   const inputSecondName = form.elements[1].name;
//   const inputFirstValue = form.elements[0].value;
//   const inputSecondValue = form.elements[1].value;
//   if (inputFirstValue === "" || inputSecondValue === "") {
//     alert("Все поля должны быть заполнены!");
//   } else {
//     infoRef[inputFirstName] = inputFirstValue;
//     infoRef[inputSecondName] = inputSecondValue;
//     console.log(infoRef);
//     event.target.reset();
//   }
// }
const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

const infoRef = {};

function onFormSubmit(event) {
  event.preventDefault();
  const inputFirstName = formRef.elements[0].name;
  const inputSecondName = formRef.elements[1].name;
  const inputFirstValue = formRef.elements[0].value;
  const inputSecondValue = formRef.elements[1].value;
  if (inputFirstValue === "" || inputSecondValue === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    infoRef[inputFirstName] = inputFirstValue;
    infoRef[inputSecondName] = inputSecondValue;
    console.log(infoRef);
    event.target.reset();
  }
}
