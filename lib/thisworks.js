irc = require('irc');
habitat = require('habitat');

// SOURCE THE ENV FILE
habitat.load('.env');
var env = new habitat('irc');

// SET VARS FOR USE IN IRC
ircopts_host = env.get('host');
ircopts_channels = env.get('channels');
ircopts_port = env.get('port');
ircopts_ssl = env.get('ssl');
ircopts_autorejoin = env.get('autorejoin_enabled');
ircopts_username = env.get('username');
all_opts = env.all();
console.log(all_opts);
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

