//
// Copyright (c) 2016 Cisco Systems
// Licensed under the MIT License 
//


/* 
 * a Webex Teams webhook that leverages node-sparkbot function: webhook.onCommand().
 * note : this example requires that you've set an ACCESS_TOKEN env variable 
 */

var SparkBot = require("node-sparkbot");

// Starts your Webhook with default configuration where the Webex Teams API access token is read from the ACCESS_TOKEN env variable 
var bot = new SparkBot();
 
bot.onCommand("help", function(command) {

  //
  // ADD YOUR CUSTOM CODE HERE
  //  
  console.log("new command: " + command.keyword + ", from: " + command.message.personEmail + ", with args: " + JSON.stringify(command.args));
  
});
