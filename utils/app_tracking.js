const get_current_app = async () => {
  const activeWin = require("active-win");
  let curr_app = await activeWin();
  if (
    curr_app &&
    curr_app.hasOwnProperty("owner") &&
    curr_app["owner"].hasOwnProperty("name")
  ) {
    return curr_app.owner.name;
  }
  return "Unknown apps";
};

const add_app_usage = (app, usage) => {
  const parsed_app_name = app;
  if (usage.hasOwnProperty(parsed_app_name))
    usage[parsed_app_name] = ++usage[parsed_app_name];
  else usage[parsed_app_name] = 1;
  console.log(usage);
};

const save_usage_to_db = (ref, usage, db) => {
  db.ref(ref).set(usage);
};

exports.get_current_app = get_current_app;
exports.add_app_usage = add_app_usage;
exports.save_usage_to_db = save_usage_to_db;
