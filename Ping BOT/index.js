if(!message.content.startsWith("!ping")) return;
    const Discord = require('discord.js');
    let ping = Math.floor(message.client.ping);

    message.channel.send(":ping_pong: Cargando.....").then(m => { //Ponemos un mensaje
      const embed = new RichEmbed()
        .setDescription(
          `:speech_balloon: Ping Mensajes: \`${m.createdTimestamp -
            message.createdTimestamp} ms\`\n :satellite_orbital: Ping DiscordAPI: \`${ping} ms\``
        ) //Obtenemos el ping de los mensajes y del API
        .setColor("RANDOM");

      m.edit(embed);//Una vez se obtienen los datos, se edita
    });
