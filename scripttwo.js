/* this is the bot that will help you send messages through REPL.IT ISNT THAT NICE !!!!! */
const Discord = require('discord.js');
const client = new Discord.Client();
const Database = require("@replit/database"); 
const db = new Database(); 
let channelid;  

client.on('ready', () => {

console.warn(`Connected to Remote Discord Sender!, as ${client.user.tag}`)
//input your channel ids, this can be determined by turning on developer mode in discord, and right clicking a channel to determine a channel id. 

let channelConnect = prompt('Type the number of the channel you would like to access \n 1) YOUR FIRST CHANNEL ID \n 2) YOUR SECOND CHANNEL ID \n  3) YOUR THIRD CHANNEL ID  \n 4) YOUR FORTH CHANNEL ID ');
if (channelConnect === '1') { 
channelid = 'THE CHANNEL ID'; 
//
}
else if (channelConnect === '2') { 

channelid = 'ANOTHER CHANNEL ID'; 

}
else if (channelConnect === '3') { 

channelid = 'A THIRD CHANNEL ID'; 

}
else if (channelConnect === '4') { 
    channelid = 'A FORTH CHANNEL ID';

}
else { 

console.log('Must Input Something!!!'); 

}
let lines = prompt('Enter the number of lines you want to send to this channel')
for (i = 0 ; i < lines ; i++) { 
   let response = prompt('What do you want to say to this'); 
  client.channels.cache.get(channelid).send(response);
   console.log('Message Successfully Sent!')
} 
})
client.login(YOUR SECOND BOT TOKEN);
