    if (message.content === '!dog'){ 

        let msg = await message.channel.send("Generating...")
    
        let {body} = await superagent
        .get("http://dog.ceo/api/breeds/image/random")
    
        if(!{body}) return message.channel.send("I have broken! Try again.")
    
            let pembed = new RichEmbed()
            .setColor(0x333333)
            .setImage(body.message)
            .setTimestamp()
            .setFooter('© nulo-dev', bot.user.displayAvatarURL)
    
            message.channel.send({embed: pembed})
    
            msg.delete();
    }
