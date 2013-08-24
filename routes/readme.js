var fs = require('fs'),
    path = require('path'),
    filepath = path.join(__dirname, '..', 'readme.md'),
    readme = fs.readFileSync(filepath).toString();

module.exports = function(req, res){
  res.json({ text: readme });
};