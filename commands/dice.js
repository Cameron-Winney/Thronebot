const Discord = require('discord.js')
module.exports = {
    name: "dice",
    description: "Roll multiple dice. Default is 1d6. Refer to usage for more details on syntax.",
    aliases: ["roll"],
    cooldown: 5,
    usage: "(optional)[number of dice] d [number of sides]. No spaces.",
    execute(message, args) {
        const diceArray = []
        const sidesArray = []
        const regexCheck = /(^\d*d\d+$)|((?<!\w+)\d+(?!\w))/
        const regexNoNumber = /(?<!\d)(d\d+$)/
        const regexPureNumber = /((?<!\w+)\d+(?!\w))/

        // necessary for the displayAvatarURL call in the embed
        const client = message.guild.members.client
        const diceEmbed = new Discord.MessageEmbed()
            .setTitle("Dice Results")
            .setFooter("This post brought to you by NerdBot", client.user.displayAvatarURL())

        // If no arguments, default roll is a die of 6 sides.
        if (!args.length) {
            const d6 = Math.floor(Math.random() * 6 + 1)
            diceEmbed.addField("D6 Result", d6)
        }

        // Check to see if the args can be parsed as numbers, if not, return an error
        for (let index = 0; index < args.length; index++) {
            if(!regexCheck.test(args[index])) return message.reply(`Cannot evaluate \"${args[index]}\"!`)
            if(regexNoNumber.test(args[index])) args[index] = '1' + args[index]
            if(regexPureNumber.test(args[index])) args[index] = '1d' + args[index]
            console.log(args[index])
            const mathLogic = args[index].split('d')
            for (let stringIndex = 0; stringIndex < mathLogic[0]; stringIndex++) {
                sidesArray.push(mathLogic[1])
                diceArray.push(Math.floor(Math.random() * mathLogic[1]) + 1)
            }
        }


        if (diceArray.length > 25) message.channel.send("Embeds are naturally limited to first 25 entries.\nIf you need more than 25 die, please roll the remainder as a second input.")

        diceArray.forEach((currentValue, index) => {
            diceEmbed.addField(`Die ${index + 1}, ${sidesArray[index]} sides`, currentValue, true)
        })
        message.channel.send(diceEmbed)

    }
}