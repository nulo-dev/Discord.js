bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch(args[0]){

        case "privatemessage":
            if(!msg.member.roles.find(r => r.name === "ROLE NAME")) return msg.channel.send('**You do not have permission to execute this command, do not touch more child!**') .then(msg => msg.delete(5000));
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("How to send a private message!")
            .setDescription("!privatemessage to send a private message.")
            .addField("Example", "!privatemessage **Server under maintenance!**")
            if(!args[1]){
                msg.channel.send(Embed);
                break;
            }
    
            let msgArgs = args.slice(1).join(" ");
    
            const Embed2 = new RichEmbed()
            .setColor(0xEAD1DC)
            .setTitle("YOUR TITLE")
            .setURL("URL FOR THE TITLE")
            .setImage("URL OF THE IMAGE")
            .setDescription(msgArgs) //this serves to send the message that you have written in the command//
            .setTimestamp()
            .setFooter('© nulo-dev', bot.user.displayAvatarURL)
            msg.guild.members.forEach(member => {
                if (member.id != bot.user.id && !member.user.bot) member.send(Embed2);
              });
        break;
    
    }
});
