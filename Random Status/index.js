
const {Client, RichEmbed} = require('discord.js');
const Discord = require('discord.js')
const bot = new Client();
const bot2 = new Discord.Client();
const superagent = require('superagent')

const token = 'YOUR TOKEN HERE';

const PREFIX = '!';

//In each line you put the state that you would like it to show on the screen, these are my examples in Spanish, CHANGE THEM//
const lista_status = [
    "Mensajero | nulo-dev", 
    "Haciendo cosas...",
    "¿Aqui de eslavo y tú?", 
    "¿Qué miras?",
    "nulo-dev EL MEJOR.",
    "Zi.",
    "El tiempo sin ti es empo.",
    "Me hago responsable de lo que digo, no de lo que entiendas.",
    "Dice mi dragón que estáis todos locos.",
    "La inteligencia me persigue pero yo soy más rápido.",
    "¿Qué hace una persona tan atractiva, divertida y original como yo aquí?",
    "Me voy de aquí, todos están loco. ¡Arre unicornio!",
    "Ser feliz es gratis. Sé feliz.",
    "Cuando madures, búscame. Estaré en los columpios.",
    "¡Abajo las drogas!… Atentamente: Los del sótano.",
    "Uno no sabe lo que tiene hasta que lo pierde...",
    "¡Eso es!",
    ];

    bot.on('ready', () => {
        console.log('nulo-dev bot is ready!');
        setInterval(() => {
            const index = Math.floor(Math.random() * (lista_status.length - 1) + 1); // generates a random number between 1 and the length of the activities array list.//
            bot.user.setActivity(lista_status[index]); // sets bot's activities to one of the phrases in the arraylist.//
        }, 10000); // Runs this every 10 seconds.
    });
