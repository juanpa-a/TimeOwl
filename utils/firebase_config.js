const firebase_config = {
  apiKey: process.env.timeowl_fb_api_key,
  authDomain: process.env.timeowl_fb_auth_domain,
  databaseURL: process.env.timeowl_fb_databaseURL,
  storageBucket: process.env.timeowl_fb_storage_bucket,
};

exports.firebase_config = firebase_config;
