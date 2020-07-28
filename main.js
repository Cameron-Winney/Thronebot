const fs = require('fs')
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const { isString } = require('util');
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
        return client.commands.get('help').execute(message, args);
    }

    if (command === `ping`) {
        return client.commands.get('ping').execute(message, args);
    }

    if (command === `user-info`) {
        return client.commands.get('user-info').execute(message, args);
    }

    if (command === `members`) {
        return client.commands.get('members').execute(message, args);
    }
    if (command === `roll`) {
        return client.commands.get('roll').execute(message, args);
    }
    if (command === 'coin') {
        return client.commands.get('coin').execute(message, args);
    }
    if (command === '8ball') {
        return client.commands.get('8ball').execute(message, args);
    }
    if (command === `multi-dice`) {
        return client.commands.get('multi-dice').execute(message, args);
    }


    //Admin commands
    if (message.member.hasPermission("KICK_MEMBERS")) {
        if (command === `kick`) {
            return client.commands.get('kick').execute(message, args);
        }
    }
    if (message.member.hasPermission("BAN_MEMBERS")) {
        if (command === `ban`) {
            return client.commands.get('ban').execute(message, args);
        }
    }

    else if (command) {
        return message.channel.send("Invalid command.")
    }
})


client.login(token);
