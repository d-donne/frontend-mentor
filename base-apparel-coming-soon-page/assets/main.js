const errorMessage = document.querySelectorAll(".form-error");
const mail = document.getElementById("email");
const form = document.querySelector("form");

// const errorMessage = document.querySelectorAll("form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail();
});

function checkEmail() {
  const email = mail.value.trim();

  if (!email | !isEmail(email)) {
    errorMessage.forEach(function (em) {
      em.style.display = "block";
    });
  } else {
    errorMessage.forEach(function (em) {
      em.style.display = "none";
    });
  }
}

function isEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}
