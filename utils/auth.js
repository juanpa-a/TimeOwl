// // const db = firebase.database();
// const firebase = require("firebase");
// const { firebase_config } = require("./firebase_config");

const save_user_to_db = (uid, full_name, email, report_to_email, db) => {
  if (uid && full_name && email && report_to_email) {
    const ref = `usage/${uid}}`;
    const usage = {
      full_name,
      email,
      report_to_email,
    };
    db.ref(ref).set(usage);
  } else {
    return "all fields are needed to create a user. [full_name, email, report_to_email]";
  }
};

const create_user = (full_name, email, report_to_email, password, firebase, db) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const uid_ref = firebase.auth().currentUser.uid;
      save_user_to_db(uid_ref, full_name, email, report_to_email, db);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.create_user = create_user;
