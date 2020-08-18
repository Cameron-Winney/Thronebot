const Discord = require('discord.js')
module.exports = {
    name: "multi-dice",
    description: "Roll multiple dice. Each number will be parsed as a unique die.",
    aliases: ["dice"], // Potential format: [num]d[sides]
    args: true,
    cooldown: 10,
    usage: "[arg1] [arg2] ... [argX]",
    execute(message, args) {
        const client = message.guild.members.client
        const diceArray = []
        const sidesArray = []
        if (args.length < 2) { return message.channel.send("Multi Dice only works with 2 or more dice. If you wanted one die, use >>roll.") }

        for (let i = 0; i < args.length; i++) {
            let number = args[i].match(/\d+/)
            sidesArray.push(number)
            diceArray.push(Math.floor(Math.random() * number) + 1)
        }
        const diceEmbed = new Discord.MessageEmbed()
            .setTitle("Dice Results")
            .setFooter("This post brought to you by NerdBot", client.user.displayAvatarURL())
            for (let j=0; j<diceArray.length; j++){
                diceEmbed.addField(`Die ${j+1}, ${sidesArray[j]} sides`, diceArray[j], true)
            }
        message.channel.send(diceEmbed)
        
    }
}