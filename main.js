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

<<<<<<< HEAD
    if (command === `ping`) {
        client.commands.get('ping').execute(message, args);
=======
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send("pong")
>>>>>>> d6528d8caf437532ad60c7a5f804a0891ca08872
    }

    if (command === `user-info`) {
        client.commands.get('user-info').execute(message, args);
    }

    if (command === `members`) {
        client.commands.get('members').execute(message, args);
    }
    if (command === 'roll') {
<<<<<<< HEAD
        client.commands.get('roll').execute(message, args);
    }
    if (command === 'coin') {
        client.commands.get('coin').execute(message, args);
    }
    if (command === `magic-8-ball`) {
        client.commands.get('magic-8-ball').execute(message, args);
=======
        const numCheck = args[0].match(/\d+/) // (/\d+/) extracts numbers from strings when used with the match string method. Returns an array of the numbers exclusively.
        if (!args.length) {
            let num = Math.floor((Math.random() * 6) + 1);
            return message.channel.send(`You rolled a ${num}!`)
        }
        else if (numcheck) {
            let num = Math.floor((Math.random() * parseInt(numCheck[0]) + 1));
            return message.channel.send(`You rolled a ${num}!`)
        }
        else if (isNaN(args[0])) {
            return message.reply("That's not a number!")
        }
        else {
            let num = Math.floor((Math.random() * args[0]) + 1);
            return message.channel.send(`You rolled a ${num}!`)
        }

    }
    if (command === 'multi-dice') {
        let diceArray = []
        let diceObj = {}
        for (let i = 0; i < args.length; i++) {
            diceArray.push(args[i].match(/\d+/))
        }
        if (args.length < 2) { return message.channel.send("Multi Dice only works with 2 or more dice. If you wanted one die, use !roll.") }

        else if (diceArray[1] !== undefined) {
            for (let j = 0; j < diceArray.length; j++) {
                diceObj[j] = Math.floor(Math.random() * diceArray[j]) + 1
            }
            return message.channel.send("The results are:" + JSON.stringify(diceObj))
        } else {
            return message.channel.send("Unknown runtime error")
        }
    }
    if (command === 'coin') {
        let coin = Math.ceil(Math.random() * 2);
        if (coin === 1) {
            return message.reply('The coin landed on heads!')
        } else {
            return message.reply('The coin landed on tails')
        }
    }
    if (command === `magic-8-ball`) {
        let responses = ["As I see it, yes.", "Ask again later.", "Ask again later.", "Cannot predict now."
            , "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely."]
>>>>>>> d6528d8caf437532ad60c7a5f804a0891ca08872
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
