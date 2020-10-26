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
    console.log('nulo-dev bot is active!');
})


bot.on('guildMemberAdd', async member =>{

let name = member.user.username
let namelimit = name.length > 12 ? name.substring(0.10) + "..." : name;
    async function createCanvas() {
        Canvas.registerFont('DoctorGlitch.otf', {family: 'DoctorGlitch'});
        let imageUrlPhoto = /\?size=1024$/g;
        let myGuild = bot.guilds.get('YOUR GUILD ID'); //Right click on the server and "copy id"//
        let memberCount = myGuild.memberCount;
        let image = 'BACKGROUND URL'; //PUT A URL THAT ENDS WITH THE PREFIX OF THE PHOTO, EXAMPLE: https://www.google.com/logos/google.jpg //
        let {body: background} = await superagent.get(image);
        let {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlPhoto, "?size=100"));
        let borde = "https://nmwrri.nmsu.edu/IBWC/2019/photos/plain-white-background.jpg"
        return new Canvas(856, 376)
            .setColor('#ffffff')
            .setTextFont('bold 50px DoctorGlitch') //You can change the font//
            .lineTo(50, 102)
            .addImage(background, 0, 0, 856, 376)
            .setTextAlign('center')
            .addText(`Welcome`, 428,280)
            .setTextFont('bold 30px DoctorGlitch')//You can change the font//
            .setTextAlign('center')
            .setColor('#29f0d8')
            .addText(`${namelimit}`, 428,320)
            .setTextFont('bold 20px DoctorGlitch')//You can change the font//
            .setColor('#ffffff')
            .addText(`¡With you we are ${memberCount} members!`, 428,350)
            .setColor('#29f0d8')
            .addCircle(432, 120, 105)
            .addRoundImage(avatar, 332, 20, 200, 200, 100)
            .toBufferAsync();
    }

    let channel = member.guild.channels.get('YOUR WELCOME CHANNEL ID') //right click on the channel you want to see the welcome and "copy id"//

const file = {
    attachment: await createCanvas(),
    name:'welcome.jpg' //this names the image name, you can change it :D //
}
    
        channel.send({files : [file]});
});


bot.login(token);
