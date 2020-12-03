const { handle_language_change } = require("../../utils/get_dict");
const dictionary = require("./dictionary.json");

document.getElementById("change_lang").addEventListener("click", () => {
  handle_language_change(dictionary);
});