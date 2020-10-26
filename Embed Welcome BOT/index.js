const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'YOUR TOKEN HERE';
const { Canvas }  = require('canvas-constructor');
const { resolve, join } = require('path');
const { get } = require('snekfetch');
const fs = require('fs');
const superagent = require('superagent');



const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('El bot esta online');
})


bot.on('guildMemberAdd', async member =>{

let namam = member.user.username
let batasnama = namam.length > 12 ? namam.substring(0.10) + "..." : namam;
    async function createCanvas() {
        Canvas.registerFont('DoctorGlitch.otf', {family: 'DoctorGlitch'});
        let imageUrlPhoto = /\?size=1024$/g;
        let myGuild = bot.guilds.get('638110806621290496');
        let memberCount = myGuild.memberCount;
        let image = 'https://i.imgur.com/k3lPUMx.jpg';
        let {body: background} = await superagent.get(image);
        let {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlPhoto, "?size=100"));
        let borde = "https://nmwrri.nmsu.edu/IBWC/2019/photos/plain-white-background.jpg"
        return new Canvas(856, 376)
            .setColor('#ffffff')
            .setTextFont('bold 50px DoctorGlitch')
            .lineTo(50, 102)
            .addImage(background, 0, 0, 856, 376)
            .setTextAlign('center')
            .addText(`Bienvenido`, 428,280)
            .setTextFont('bold 30px DoctorGlitch')
            .setTextAlign('center')
            .setColor('#29f0d8')
            .addText(`${batasnama}`, 428,320)
            .setTextFont('bold 20px DoctorGlitch')
            .setColor('#ffffff')
            .addText(`¡Contigo somos ${memberCount} miembros!`, 428,350)
            .setColor('#29f0d8')
            .addCircle(432, 120, 105)
            .addRoundImage(avatar, 332, 20, 200, 200, 100)
            .toBufferAsync();
    }

    let channel = member.guild.channels.get('769204134968426496')
const Mensaje = {
    color: 1752220,
    title: `<a:pepeShoot:659762885706383380> | **Hola ${member.user.username}!**`,
    description: `**Bienvenid@ a:** \n Osaka RP ¡Yōkoso, asonde tanoshinde kudasai!`,
};

const file = {
    attachment: await createCanvas(),
    name:'bienvenida.jpg'
}
    
        channel.send({files : [file]});
});


bot.login(token);
