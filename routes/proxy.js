var request = require('request'),
    path = require('path'),
    config = require(path.join(__dirname, '..', 'config')),
    proxy_url = "https://" + config.user + ".cloudant.com";

module.exports = function(prefix){
  return function(req, res, next){
    var proxy_path = req.path.match(RegExp("^\\/" + prefix + "(.*)$"));
    if(proxy_path){
      var db_url = proxy_url + proxy_path[1];
      req.pipe(request({
        uri: db_url,
        method: req.method,
        qs: req.query
      })).pipe(res);
    } else {
      next();
    }
  };
};