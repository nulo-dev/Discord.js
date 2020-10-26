const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();

const token = 'YOUR TOKEN HERE';

const PREFIX = '!';


bot.on('ready', () => {
    console.log('This bot is active!');

    bot.user.setPresence( {
        status: "online",
        game: {
            name: "Sugerencias",
            type: "PLAYING"
        }
    } );
});

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case "sugerencia":
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("¡Como iniciar una sugerencia!")
            .setDescription("!sugerencia para mandar una sugerencia.")
            .addField("Ejemplo", "!sugerencia **¡Agregar este coche!**")
            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            const Embed2 = new RichEmbed()
            .setColor(0xFFC300)
            .setAuthor(`${message.author.username}`, message.author.avatarURL)
            .setDescription(msgArgs)
            .setThumbnail("https://i.imgur.com/r8XLl7Q.png")
            .setFooter("© Osaka RP", "https://i.imgur.com/rkyOREy.gif")
            message.channel.send(Embed2).then(messageReaction => {
                messageReaction.react(":checkreact:659765899598888960").then ( () => messageReaction.react(":no:659765899582111764"));
                message.delete(2000).catch(console.error);
            });
        break;

    }

    var idbot = "716717437810376754";
        if(message.author.id !== idbot){
            message.delete(0).catch(console.error);
        }
});

bot.login(token);
