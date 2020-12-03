const { handle_language_change } = require("../../utils/get_dict");
const { validate_login } = require("../../utils/validate_login");
const dictionary = require("./dictionary.json"); 

document.getElementById("change_lang").addEventListener("click", () => {
  handle_language_change(dictionary);
});

document.getElementById("login").addEventListener("click", () => {
  window.location.href = "../time_tracker/view.html";
  test();
});

document.getElementById("signup").addEventListener("click", () => {
  window.location.href = "../sign_up/view.html";
});
