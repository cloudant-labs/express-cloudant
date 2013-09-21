var path = require('path'),
    admin_url = "https://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@" + process.env.USERNAME + ".cloudant.com",
    nano = require('nano')(admin_url);

module.exports = function(app, prefix){
  function makePath(path){
    // convenience method for generating route paths
    var newPath = '/' + [prefix, path].join('/');
    return newPath;
  }

  app.get(makePath(':name'), function(req, res){
    // return the root of the named database
    nano.db.get(req.params.name).pipe(res);
  });
};