const firebase = require("firebase");
const firebase_config = require("../../utils/firebase_config");
const { handle_language_change } = require("../../utils/get_dict");
const { create_user } = require("../../utils/auth");
const { validate_fields } = require("../../utils/form_validation");
const dictionary = require("./dictionary.json");

firebase.initializeApp(firebase_config);
// const db = firebase.database();

console.log(firebase_config);

document.getElementById("change_lang").addEventListener("click", () => {
  handle_language_change(dictionary);
});

document.getElementById("register").addEventListener("click", () => {
  const usage = validate_fields();
  console.log("entered.")

  switch (usage) {
    case "full_name_required":
      console.log("error!");
      break;
    case "email_required":
      console.log("error!");
      break;

    case "report_to_email_required":
      console.log("error!");
      break;
    case "password_required":
      console.log("error!");
      break;
    case "password_dont_match":
      console.log("error!");
      break;
    default:
      console.log("ok!!")
      create_user(...usage, firebase);
  }
});
