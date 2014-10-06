habitat = require('habitat');

// SOURCE THE ENV FILE
habitat.load('./.env');
var irc = require('irc');
var env = new habitat('irc');

// SET VARS FOR USE IN IRC
ircopts_host = env.get('host');
ircopts_channels = env.get('channels');
ircopts_port = env.get('port');
ircopts_ssl = env.get('ssl');
ircopts_autorejoin = env.get('autorejoin_enabled');
ircopts_username = env.get('username');
