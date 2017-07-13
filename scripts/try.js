var natural = require('natural');

(function() {
  module.exports = function(robot) {
    return robot.listen(function(message) {
      if (!message.text) {
        return;
      }
      return message.user && Math.random() > 0.8;
    }, function(response) {
      return response.reply("HI STEVE! YOU'RE MY BEST FRIEND! (but only like " + (response.match * 100) + "% of the time)");
    });
  };

}).call(this);
