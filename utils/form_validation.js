const validate_fields = () => {
  const full_name = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const report_to_email = document.getElementById("report_to_email").value;
  const password = document.getElementById("password").value;
  const password_confirmation = document.getElementById("password_confirmation")
    .value;

  if (full_name.length < 2) {
    return "full_name_required";
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return "email_required";
  }

  if (!/\S+@\S+\.\S+/.test(report_to_email)) {
    return "report_to_email_required";
  }

  if (password.length < 8) {
    return "password_required";
  }

  if (password !== password_confirmation) {
    return "password_dont_match";
  }

  return {
    full_name,
    email,
    report_to_email,
    password,
  };
};

exports.validate_fields = validate_fields;