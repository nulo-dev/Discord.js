
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
                      let msg = await message.channel.send("Generating...")
                        get('https://some-random-api.ml/img/panda').then(res => {
                            const embed = new Discord.RichEmbed()
                            .setImage(res.body.link)
                            return message.channel.send({embed});
                        });
                      msg.delete();
                    } catch(err) {
                        console.log(err.stack)
                    }
                }
});

bot.login(token);
