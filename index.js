const form = document.querySelector("form");
const submit = document.querySelector(".container");
const success = document.querySelector(".success");
const dismiss = document.getElementsByClassName("dismiss");

function handleSubmit(e) {
  e.preventDefault();
  submit.classList.add("hide");
  success.classList.remove("hide");
}

form.addEventListener("submit", handleSubmit);
