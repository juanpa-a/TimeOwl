const change_lang_button = () => {
  // ? functions side effects:
  // * changes button text: ["EN", "ES"]
  let button = document.getElementById("change_lang").innerHTML;
  switch (button) {
    case "ES":
      document.getElementById("change_lang").innerHTML = "EN";
      return "es";
    case "EN":
      document.getElementById("change_lang").innerHTML = "ES";
      return "en";
    default:
      document.getElementById("change_lang").innerHTML = "ES";
      return "en";
  }
};

const set_language = (language, dictionary) => {
  // ? functions side effects:
  // * changes all text to diferent language
  for (let word in dictionary[language]) {
    let node_type = document.getElementById(word).nodeName;
    switch (node_type) {
      case "INPUT":
        document.getElementById(word).placeholder = dictionary[language][word];
        break;
      case "BUTTON":
        document.getElementById(word).innerHTML = dictionary[language][word];
        break;
      case "A":
        document.getElementById(word).innerHTML = dictionary[language][word];
        break;
      default:
        return false;
    }
  }
};

const handle_language_change = (dictionary) => {
  // ? functions side effects:
  // * changes button text: ["EN", "ES"]
  // * changes all text to diferent language
  let language = change_lang_button();
  set_language(language, dictionary);
};

// ? USAGE
// * create a json dictionary and import it in the view's logic.
// * view must must mimic json keys with elements ids

exports.handle_language_change = handle_language_change;