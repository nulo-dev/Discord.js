   
const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const superagent = require('superagent')

const token = 'YOUR TOKEN HERE';

const PREFIX = '!';
   bot.on("message", async (message,args) => {
   if (message.content === "!covid") {
        let res = await require('node-fetch')(`https://corona.lmao.ninja/v2/all?yesterday=false`);
        let data = await res.json();
        let covid = new RichEmbed()
        .setTitle('Covid-19 information today') 
        .addField('Cases', data.cases.toLocaleString(), true)
        .addField('Cases today', data.todayCases.toLocaleString(), true)
        .addField('Deaths', data.deaths.toLocaleString(), true)
        .addField('Deaths today', data.todayDeaths.toLocaleString(), true)
        .addField('Critical situations', data.critical.toLocaleString(), true)
        .addField('Recovered', data.recovered.toLocaleString(), true)
        .addField('Odds in a million', data.testsPerOneMillion.toLocaleString(), true)
        .addField('Countries affected', data.affectedCountries.toLocaleString(), true)
        .setColor('#FF0000')
        message.channel.send(covid)
    }
    )};
