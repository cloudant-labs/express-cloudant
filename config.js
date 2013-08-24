// map options to environment variables
var options = process.env;

// special settings
options.USERNAME = options.USERNAME || "USERNAME";
options.PASSWORD = options.PASSWORD || "PASSWORD";

// expose to the application
module.exports = options;