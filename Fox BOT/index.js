
const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const superagent = require('superagent')
const { get } = require("snekfetch"); 

const token = 'YOUR TOKEN';

const PREFIX = '!';

bot.on("message", async (message,args) => {
                if(message.content.startsWith(PREFIX + 'fox')) {
                    try {
                        get('https://randomfox.ca/floof/').then(res => {
                            const embed = new Discord.RichEmbed()
                            .setImage(res.body.image)
                            return message.channel.send({embed});
                        });
                    } catch(err) {
                        console.log(err.stack)
                       // return message.channel.send(err.stack);
                    }
                }
});

bot.login(token);
