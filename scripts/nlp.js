var nlp = require('natural')

(function() {
  module.exports = function(robot) {
    return robot.hear(/badger/i, function(res) {
      return res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
    });
  };

}).call(this);
