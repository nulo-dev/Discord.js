const { Client, RichEmbed } = require('discord.js');
const bot = new Client();

const token = "YOUR TOKEN HERE";

const PREFIX = "!";

bot.on('ready', () =>{
    console.log("El bot esta activo!");
});

bot.on('message', message  =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case "encuesta":
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("¡Como iniciar una encuesta!")
            .setDescription("!encuesta para mandar una encuesta simple de sí o no.")
            .addField("Ejemplo", "!encuesta **¿Shii#0730 es el mejor?**")
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
