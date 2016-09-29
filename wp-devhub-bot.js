/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is a sample Slack bot built with Botkit.

This bot demonstrates many of the core features of Botkit:

* Connect to Slack using the real time API
* Receive messages based on "spoken" patterns
* Reply to messages
* Use the conversation system to ask questions
* Use the built in storage system to store and retrieve information
  for a user.

# RUN THE BOT:

  Get a Bot token from Slack:

    -> http://my.slack.com/services/new/bot

  Run your bot from the command line:

    token=<MY TOKEN> node slack_bot.js

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


controller.hears(['Function: `(.*)`'], 'direct_message,direct_mention,mention', function(bot, message) {

    var function_reference = message.match[1];

    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, user.name + ': Have a look here: https://developer.wordpress.org/reference/functions/' + function_reference + '/' );
        } else {
            bot.reply(message, 'Have a look here: https://developer.wordpress.org/reference/functions/' + function_reference + '/' );
        }
    });
});

controller.hears(['Class: z(.*)`'], 'direct_message,direct_mention,mention', function(bot, message) {

    var class_reference = message.match[1];

    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, user.name + ': Have a look here: https://developer.wordpress.org/reference/classes/' + class_reference + '/' );
        } else {
            bot.reply(message, 'Have a look here: https://developer.wordpress.org/reference/classes/' + class_reference + '/' );
        }
    });

});

controller.hears(['Hook: `(.*)`'], 'direct_message,direct_mention,mention', function(bot, message) {

    var hook_reference = message.match[1];

    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, user.name + ': Have a look here: https://developer.wordpress.org/reference/hooks/' + hook_reference + '/' );
        } else {
            bot.reply(message, 'Have a look here: https://developer.wordpress.org/reference/hooks/' + hook_reference + '/');
        }
    });

});
