const discord = require('discord.js');
const client = new discord.Client();

const token = "YOUR TOKEN HERE";

client.login(token);

//counts users when bot starts//
client.on('ready', () => {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('705868078784970823');
    memberCountChannel.setName('¡WE ARE ' + memberCount + ' USERS!')
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
//counts users when a member joins the discord//
client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('705868078784970823');
    memberCountChannel.setName('¡WE ARE ' + memberCount + ' USERS!')
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
//counts users when a member left the discord//
client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('705868078784970823');
    memberCountChannel.setName('¡WE ARE ' + memberCount + ' USERS!')
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('message', (message, user) => {

if (message.content === "!usuarios") {
    let myGuild = client.guilds.get('638110806621290496');
    let memberCount = myGuild.memberCount;
    message.channel.send("This server has "+memberCount+" members in total") //Message where the bot shows the users of the server//
}

});
