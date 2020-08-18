const { prefix } = require('../config.json')
const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: 'Gives you list of commands.',
    aliases: ["commands"],
    cooldown: 10,
    execute(message, args) {
        const client = message.guild.members.client
        const { commands } = message.client
        let data = []
        if (!args.length) {
            data.push(
                commands.filter(command => {
                    if (command.dev || command.admin) return false
                    return true
                })
                .map(command => command.name)
                .join(', ')
            )
            data.push(commands.filter(command => command.admin)
                .filter(command => {
                    if (command.dev) return false
                    return true
                })
                .map(command => command.name)
                .join(', '))

            const dataEmbed = new Discord.MessageEmbed()
                .setTitle("ThroneBot Commands")
                .addField("Regular commands", data[0])
                .addField("Admin commands", data[1])
                .addField("Additional Help", `You can send \`${prefix}help [command name]\` in the main channel for more info on a specific command.`)
                .setFooter("This post brought to you by ThroneBot", client.user.displayAvatarURL())
            return message.author.send(dataEmbed)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Your commands, my liege.')
                })
                .catch(error => {
                    console.error(`Cound not send help DM to ${message.author.tag}.\n`, error)
                    message.reply(`ThroneBot does not respond to closed DMs.`)
                })
        }
        const name = args[0].toLowerCase()
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name))

        if (!command) {
            return message.reply("Not a valid command.")
        }
        const commandEmbed = new Discord.MessageEmbed()
            .setTitle(`Name: ${command.name}`)
            if (command.admin){commandEmbed.addField("ADMIN ONLY", "\u200B")}
            if (command.aliases){commandEmbed.addField("Aliases:", command.aliases.join(", "))}
            if (command.description){commandEmbed.addField("Description", command.description)}
            if (command.usage){commandEmbed.addField("Usage", prefix + command.name + " " + command.usage)}
            commandEmbed.addField("Cooldown", (command.cooldown || 3) + " second(s)")
            commandEmbed.setFooter("This post brought to you by ThroneBot", client.user.displayAvatarURL())

        message.author.send(commandEmbed)
        message.reply("Help is on the way!")
    }
}