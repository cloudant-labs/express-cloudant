var fs = require('fs'),
    path = require('path'),
  // root of the Cloudant URL we'll push to
    admin_url = "https://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@" + process.env.USERNAME + ".cloudant.com",
  // get paths to every design doc in the folder, excluding this file
    paths = fs.readdirSync(__dirname).filter(function(path){ return path !== "index.js" && path.match(/\.js$/); }),
    couchapps = {};

// map paths and dbs to the object we'll pass to grunt-couchapp
for(var i in paths){
  // strip '.js' from the path
  var db = paths[i].replace(/\.js/, '');
  // NB: this pattern implies one design doc per database
  couchapps[db] = {
    // database to which the design doc will be pushed
    db: [admin_url, db].join('/'),
    // where the design doc lives
    app: path.join('ddocs', paths[i])
  };
}

module.exports = couchapps;
