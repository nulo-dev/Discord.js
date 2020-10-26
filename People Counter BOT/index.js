const discord = require('discord.js');
const client = new discord.Client();

const token = require('./config.json').token;

client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('705868078784970823');
    memberCountChannel.setName('¡SOMOS ' + memberCount + ' USUARIOS!')
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('705868078784970823');
    memberCountChannel.setName('¡SOMOS ' + memberCount + ' USUARIOS!')
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('705868078784970823');
    memberCountChannel.setName('¡SOMOS ' + memberCount + ' USUARIOS!')
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('message', (message, user) => {

if (message.content === "!usuarios") {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    message.channel.send("Este server tiene "+memberCount+" miembros en total") //Mensaje en donde el bot muestra los usuarios del server
}

});
