/*this is the listener file, this file helps you listen to conversation. Notice that this is a beta feature, and it listens to all messages.
I am working on a new version that listens to specific conversation. Copy paste this code onto your first bot*/

const Discord = require('discord.js'); 
const client = new Discord.Client(); 

client.on('ready' ,() => { 
client.user.setStatus('Listening for Messages...')
console.warn(`Now listening for conversation as ${client.user.tag}`); 

 
})

let channelid = prompt('Type the channel ID');
let channel = client.channels.cache.get(channelid);
client.on('message', (message) => { 
 
console.log(`${message.author.username}@${message.guild.name}:${message.content}`);



})
client.login(YOUR TOKEN);
