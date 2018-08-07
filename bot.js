const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hoş Geldin ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('AleykümSelam!');
	
  }
});
client.on('message', msg => {
  if (msg.content === 'S.a') {
    msg.reply('AleykümSelam!');
}
});

client.login('476413677256441860');