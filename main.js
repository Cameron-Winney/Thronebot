const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

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

    if (message.content === `${prefix}ping`) {
        message.channel.send("pong")
    }

    if (message.content.startsWith(`${prefix}user-info`)) {
        let member = message.mentions.members.first();
        message.channel.send(`the username is ${member.displayName}\nThe ID is ${member.id}`)
    }

    if (message.content === `${prefix}members`) {
        message.channel.send(`There are currently ${message.guild.memberCount} members in ${message.guild.name}`)
    }
    if(command === 'roll') {
        if(!args.length) {
            let num = Math.floor(Math.random() * 7); 
            return message.channel.send(`You rolled a ${num}!`)
        } else if(isNaN(args[0])) {
            return message.reply("That's not a number!")
        } else{
            let num = Math.floor(Math.random() * args[0]); 
            return message.channel.send(`You rolled a ${num}!`)
        }

    }
    if(command === 'coin') {
        let coin = Math.ceil(Math.random() * 2);
        if(coin === 1) {
            return message.reply('The coin landed on heads!')
        } else {
            return message.reply('The coin landed on tails')
        }
    }
    if (command === `magic-8-ball`) {
        let responses = ["As I see it, yes.", "Ask again later.", "Ask again later.", "Cannot predict now."
            , "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.",
            "Most likely.","My reply is no.","My sources say no.","Outlook not so good.","Outlook good.",
            "Reply hazy, try again."," Signs point to yes."," Very doubtful.","Without a doubt.","Yes.",
            "Yes – definitely.","You may rely on it."]

            if(!args.length) {
                message.reply("You need to ask a question also!")
            } else {
                let num = Math.floor((Math.random() * 6) + 1);
                message.reply(responses[num])
            }
    }


    //Admin commands
    if (message.member.hasPermission("KICK_MEMBERS")) {


        if (message.content.startsWith(`${prefix}kick`)) {
            let args = message.content.slice(prefix.length).trim().split(' ');
            const user = message.mentions.users.first();
            let reason = args[2]

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member
                        .kick(`${reason}`)

                        .then(() => {
                            message.reply(`Successfully kicked ${user.tag} for ${reason}`);
                        })
                        .catch(err => {
                            message.reply(`I was unable to kick the member!`)

                            console.error(err);
                        })
                } else {
                    message.reply("That user isn't in the server!")
                }
            }
            else {
                message.reply("You didn't mention the user to kick!")
            }
        }
    }
    if (message.member.hasPermission("BAN_MEMBERS")) {
        if (message.content.startsWith(`${prefix}ban`)) {

            let member = message.mentions.members.first();
            member.ban().then((member) => {
                message.channel.send(member.displayName + " has been banned!")
            })
        }
    }





})


client.login(token);
