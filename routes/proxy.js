var request = require('request'),
    path = require('path'),
    proxy_url = "https://" + process.env.USERNAME + ".cloudant.com";

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