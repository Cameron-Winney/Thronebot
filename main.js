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
    if (command === 'help') {
        client.commands.get('help').execute(message, args);
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
    if (command === `roll`) {
        client.commands.get('roll').execute(message, args);
    }
    if (command === 'coin') {
        client.commands.get('coin').execute(message, args);
    }
    if (command === '8ball') {
        client.commands.get('8ball').execute(message, args);
    }
    if (command === `multi-dice`) {
        client.commands.get('multi-dice').execute(message, args);
    }


    //Admin commands
    if (message.member.hasPermission("KICK_MEMBERS")) {


        if (command === `kick`) {
            client.commands.get('kick').execute(message, args);
        }
    }
    if (message.member.hasPermission("BAN_MEMBERS")) {
        if(command === `ban`){
        client.commands.get('ban').execute(message, args);
        }
    }




})


client.login(token);
