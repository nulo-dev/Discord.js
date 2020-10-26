const { Client, RichEmbed } = require('discord.js');
const bot = new Client();

const token = "YOUR TOKEN HERE";

const PREFIX = "!";

bot.on('ready', () =>{
    console.log("nul-dev bot is active!");
});

bot.on('message', message  =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case "poll":
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("¡How to start a survey!")
            .setDescription("!poll to send a simple yes or no poll.")
            .addField("Example", "!poll **¿nul-dev is the best?**")
            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
                    messageReaction.react("👍");
                    messageReaction.react("👎");
                message.delete(2000).catch(console.error);
            });
        break;

    }
});

bot.login(token);
