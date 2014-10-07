var habitat = require('habitat');

// SOURCE THE ENV FILE
habitat.load('./.env');
var irc = require('irc');
var env = new habitat('irc');

// SET VARS FOR USE IN IRC
var ircopts_host = env.get('host');
var ircopts_channels = env.get('channels');
var ircopts_port = env.get('port');
var ircopts_autorejoin = env.get('autorejoin_enabled');
var ircopts_username = env.get('username');
var all_opts = env.get(all);