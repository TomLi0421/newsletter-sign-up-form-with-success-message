function ValidateEmail() {
  const email = document.querySelector(".sign-up-email");
  const invalidMsg = document.querySelector(".sign-up-invald");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email.value)) {
    console.log("right email");
    return true;
  } else {
    console.log("false email");
    email.focus();
    email.classList.add("sign-up-email-error");
    invalidMsg.style.display = "inline";
    return false;
  }
}
