
const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const superagent = require('superagent')
const { get } = require("snekfetch"); 

const token = 'YOUR TOKEN';

const PREFIX = '!';

bot.on("message", async (message,args) => {
                if(message.content.startsWith(PREFIX + 'panda')) {
                    try {
                        get('https://some-random-api.ml/img/panda').then(res => {
                            const embed = new Discord.RichEmbed()
                            .setImage(res.body.link)
                            return message.channel.send({embed});
                        });
                    } catch(err) {
                        console.log(err.stack)
                    }
                }
});

bot.login(token);
