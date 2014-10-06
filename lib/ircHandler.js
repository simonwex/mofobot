var habitat = require('habitat');
var configure = require('../conf/configure.js');
var env = new habitat('irc');
all_opts = env.all();
var irc = require('irc');

// Connect to the channels defined in conf as the username defined in conf
client = new irc.Client(ircopts_host, ircopts_username, {
    channels: [ircopts_channels],
    port: ircopts_port,
    secure: ircopts_ssl,
    autoRejoin: ircopts_autorejoin
});

// Connect to IRC, try it five times
client.connect(5, function() {
  client.join(ircopts_channels);
  console.log('Connected to irc with', all_opts);
});

// Watch for problems in the irc connection, return them
client.addListener('error', function(message) {
  console.log('error: ', message);
});

module.exports = function(datatosend) {
  client.say(ircopts_channels, datatosend);
  console.log('We seem to be awesome');
}