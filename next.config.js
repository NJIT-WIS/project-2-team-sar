require('dotenv').config();

module.exports = {
  env: {
    REACT_APP_MAILCHIMP_API_KEY: process.env.REACT_APP_MAILCHIMP_API_KEY,
    REACT_APP_MAILCHIMP_LIST_ID: process.env.REACT_APP_MAILCHIMP_LIST_ID,
  },
};
