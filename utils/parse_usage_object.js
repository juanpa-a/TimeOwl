const { string_to_color } = require("./string_to_color");

const parse_usage_object = (usage) => {
  const chart_data = {
    apps: [],
    values: [],
    colors: [],
  };

  for (let key in usage) {
    chart_data.apps.push(key);
    chart_data.values.push(usage[key]);
    chart_data.colors.push(string_to_color(key));
  }

  return chart_data;
};

exports.parse_usage_object = parse_usage_object;
