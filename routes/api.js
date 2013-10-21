var pouchdb = require('pouchdb');

function connect (remote, db_name) {
  var db = new pouchdb(db_name),
      opts = {
        continuous: true
      };

  db.replicate.to([remote, db_name].join('/'), opts);
  db.replicate.from([remote, db_name].join('/'), opts);

  return db;
}

module.exports = function(app, prefix, admin_url){
  // sync with a cloudant database; for example, "crud"
  var cloudant = connect(admin_url, 'crud');

  // convenience method for generating route paths
  // from the prefix and a given path
  // good for, say, API versioning
  function makePath(path){
    var newPath = '/' + [prefix, path].join('/');
    return newPath;
  }

  app.get(makePath('crud'), function(req, res){
    // return the contents of the 'crud' database
    cloudant.allDocs(req.query, function (err, body) {
      res.json(err || body);
    });
  });
};
