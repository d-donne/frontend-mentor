"use strict";

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const mail = document.getElementById("email");
const pass = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const firstname = fname.value.trim();
  const lastname = lname.value.trim();
  const email = mail.value.trim();
  const password = pass.value.trim();

  //   validate firstname
  if (firstname.length < 1) {
    setError(fname, "First Name cannot be empty");
  } else {
    setSuccess(fname);
  }

  // validate lastname
  if (lastname.length < 1) {
    setError(lname, "Last Name cannot be empty");
  } else {
    setSuccess(lname);
  }

  //   validate email
    if (email.length < 1) {
      setError(mail, "Email cannot be empty");
    }else if (!isEmail(email)) {
      setError(mail, "Looks like this is not an email");
    }else {
      setSuccess(mail);
    }

    //validate password
    if (password.length < 1) {
        setError(pass, "Password cannot be empty");
    } else {
        setSuccess(pass);
    }
}

function setError(input, message) {
  // show error message
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = message;

  //add error class
  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.classList.add("success");
  formControl.classList.remove("error");
}






function isEmail(email) {
//   const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}
