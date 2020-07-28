const fs = require('fs')
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();


    //general commands
    if (message.content === `${prefix}help`) {
        message.channel.send(`
    >>help -- gives you list of commands.
    >>ping -- Pong!
    >>user-info -- gives you anyone's real username and discord ID.
    >>members -- lists how many people are in the server.
    >>roll _ -- you can put a number after and it will roll a die for you. By default it will roll 6 sided die.
    >>multi-dice -- similar to >>roll but you can roll multiple dice.
    >>coin -- I will flip a coin for you.
    >>magic-8-ball -- you can ask a question and I will give you an answer.
    THESE NEXT ONES ARE ADMIN ONLY!
    >>kick -- kicks specified user.
    >>ban -- bans specified user.`)
    }

    if (command === `ping`) {
        client.commands.get('ping').execute(message, args);
    }

    if (command === `user-info`) {
        client.commands.get('user-info').execute(message, args);
    }

    if (command === `members`) {
        client.commands.get('members').execute(message, args);
    }
    if (command === 'roll') {
        client.commands.get('roll').execute(message, args);
    }
    if (command === 'coin') {
        client.commands.get('coin').execute(message, args);
    }
    if (command === `magic-8-ball`) {
        client.commands.get('magic-8-ball').execute(message, args);
    }


    //Admin commands
    if (message.member.hasPermission("KICK_MEMBERS")) {


        if (command === `kick`) {
            client.commands.get('kick').execute(message, args);
        }
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if(command === `ban`){
            client.commands.get('ban').execute(message, args);
            }
        }
    }




})


client.login(token);
