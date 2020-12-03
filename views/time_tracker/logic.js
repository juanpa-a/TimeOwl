const { handle_language_change } = require("../../utils/get_dict");
const dictionary = require("./dictionary.json");
const {
  get_current_app,
  add_app_usage,
  // !! not in use till paid version!
  ////save_usage_to_db,
} = require("../../utils/app_tracking");
const { parse_usage_object } = require("../../utils/parse_usage_object");
// const { hex_to_rgba } = require("../../utils/string_to_color");

// ui elements
const change_lang = document.getElementById("change_lang");
const start_session = document.getElementById("start_session");
const actions = document.getElementById("actions");
const break_btn = document.getElementById("break");
const end = document.getElementById("end");
const Chart = require("chart.js");

const usage = {};
let logger;

const ctx = document.getElementById("usage_chart").getContext("2d");
const usage_chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Terminal", "VS Code"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "#000000, 50",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    cutoutPercentage: 35,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontSize: 14,
      }
    }
  }
});

change_lang.addEventListener("click", () => {
  handle_language_change(dictionary);
});

start_session.addEventListener("click", () => {
  // TODO make animation function
  replace_buttons(actions, start_session);
  log_app_usage();
});

break_btn.addEventListener("click", () => {
  // TODO dynamically evaluate and change text from json dictionary
  // TODO maybe animate text transition, disabled only useful if animation is added
  ////break_btn.disabled = true;
  if (break_btn.innerHTML === "Take a break") {
    clearInterval(logger);
    break_btn.innerHTML = "End break";
  } else {
    log_app_usage();
    break_btn.innerHTML = "Take a break";
  }
  ////break_btn.disabled = false;
});

end.addEventListener("click", () => {
  clearInterval(logger);
  replace_buttons(start_session, actions);
});

const log_app_usage = () => {
  logger = setInterval(() => {
    get_current_app().then((app) => {
      add_app_usage(app, usage);
      const { apps, values, colors } = parse_usage_object(usage);
      usage_chart.data.labels = apps;
      usage_chart.data.datasets[0].data = values;
      usage_chart.data.datasets[0].backgroundColor = colors;
      usage_chart.update();
    });
  }, 15000);
};

const replace_buttons = (new_button, old_button) => {
  new_button.classList.remove("hide_button");
  new_button.classList.add("show_button");

  old_button.classList.add("hide_button");
  old_button.classList.remove("show_button");
};
