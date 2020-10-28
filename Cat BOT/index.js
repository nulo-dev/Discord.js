
const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const superagent = require('superagent')
const { get } = require("snekfetch"); 

bot.on("message", async (message,args) => {
                if(message.content.startsWith(PREFIX + 'gato')) {
                    try {
                        get('https://aws.random.cat/meow').then(res => {
                            const embed = new Discord.RichEmbed()
                            .setImage(res.body.file)
                            return message.channel.send({embed});
                        });
                    } catch(err) {
                        console.log(err.stack)
                    }
                }
          });
