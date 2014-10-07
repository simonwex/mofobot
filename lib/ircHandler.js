irc = require('irc');
habitat = require('habitat');

// SOURCE THE ENV FILE
habitat.load('../.env');
var env = new habitat('irc');

// SET VARS FOR USE IN IRC
var ircopts_host = env.get('host');
var ircopts_channels = env.get('channels');
var ircopts_port = env.get('port');
var ircopts_ssl = env.get('ssl');
var ircopts_autorejoin = env.get('autorejoin_enabled');
var ircopts_username = env.get('username');
var all_opts = env.all();

// CONNECT UP
var client = new irc.Client(ircopts_host, ircopts_username, {
    channels: [ircopts_channels],
    port: ircopts_port,
    secure: ircopts_ssl,
    autoRejoin: ircopts_autorejoin
});

// WATCH FOR IRC ERRORS AND DON'T BOMB
client.addListener('error', function(message) {
    console.log('error: ', message);
});

// RETRY 5 TIMES IF NEESSARY
client.connect(5, function() {
    client.join(ircopts_channels);
    client.say(ircopts_channels, "I am functional again.  Skynet otw.");
    console.log('Connected to irc with', all_opts);
});

exports.sendIrcMsg = function(ircopts_channels, msgtosend) {
  client.say(ircopts_channels, msgtosend);
};

