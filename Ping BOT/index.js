
const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const superagent = require('superagent')
const { get } = require("snekfetch"); 

const token = 'YOUR TOKEN';

const PREFIX = '!';

if(!message.content.startsWith("!ping")) return;
    let ping = Math.floor(message.client.ping);

    message.channel.send(":ping_pong: Charging.....").then(m => { //We put a message
      const embed = new RichEmbed()
        .setDescription(
          `:speech_balloon: Ping Messages: \`${m.createdTimestamp -
            message.createdTimestamp} ms\`\n :satellite_orbital: Ping DiscordAPI: \`${ping} ms\``
        ) //We get the ping of the messages and the API
        .setColor("RANDOM");

      m.edit(embed);//Once the data is obtained, it is edited
    });
