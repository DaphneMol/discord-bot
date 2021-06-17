const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODU0OTc5Nzk0MTU5OTI3Mjk2.YMrz-w.8xxJRHoXtMbmFcNUWLMSghqPXaU');

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('working');
}

client.on('message', gotMessage);

function gotMessage(msg) {
  console.log(msg.content);
  if (msg.channel.id == '854982122762665995' && msg.content === 'Hi') {
    msg.reply('Hello!');
    //msg.channel.send ('Hello')
  }
}

client.on('message', (message) => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});
