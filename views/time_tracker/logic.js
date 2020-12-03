const { handle_language_change } = require("../../utils/get_dict");
const dictionary = require("./dictionary.json");

const change_lang = document.getElementById("change_lang");
const start_session = document.getElementById("start_session");
const actions = document.getElementById("actions");
const break_btn = document.getElementById("break");
const end = document.getElementById("end");

change_lang.addEventListener("click", () => {
  handle_language_change(dictionary);
});

start_session.addEventListener("click", () => {
  start_session.classList.add("hide_button");
  start_session.classList.remove("show_buttons");
  actions.classList.remove("hide_button");
  actions.classList.add("show_buttons");
});

break_btn.addEventListener("click", () => {
  // TODO dynamically evaluate and change text from json dictionary
  break_btn.disabled = true;
  if (break_btn.innerHTML === "Take a break") {
    break_btn.classList.remove("show_text");
    break_btn.innerHTML = "End break";
    break_btn.classList.add("show_text");
  } else {
    break_btn.classList.remove("show_text");
    break_btn.innerHTML = "Take a break";
    break_btn.classList.add("show_text");
  }
  break_btn.disabled = false;
});

end.addEventListener("click", () => {
  actions.classList.remove("show_buttons");
  actions.classList.add("hide_button");
  start_session.classList.add("show_buttons");
  start_session.classList.remove("hide_button");
});
