const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const superagent = require('superagent')
const { get } = require("snekfetch"); 

const token = 'YOUR TOKEN';

const PREFIX = '!';

if (message.content.startsWith('!user-info')) {
    const user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;
    const moment= require('moment') 
    
    let status = {
        "online": "Connected",
        "offline": "Disconnected",
        "idle": "Busy",
        "dnd": "Do not disturb",

    }
    const infoEmbed = new RichEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(user.displayAvatarURL)
        .addField("Full name", `${user.tag}`)
        .addField("ID", `${user.id}`)
        .addField("Status", `${status[member.presence.status]}`)
        .addField("Nickname", `${member.nickname}`)
        .addField("Joined the server", `${moment.utc(member.joinedAt).format('DD/MM/YY HH:mm')}`)
        .addField('Rols', member.roles.map(r => `${r}`).join(' | '))
    message.channel.send(infoEmbed);
}
