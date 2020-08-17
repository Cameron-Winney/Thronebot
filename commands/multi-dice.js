module.exports = {
    name: "multi-dice",
    description: "Roll multiple dice. Each number will be parsed as a unique die.",
    aliases: ["dice"], // Potential format: [num]d[sides]
    args: true,
    cooldown: 10,
    usage: "[arg1] [arg2] ... [argX]",
    execute(message, args) {
        let diceArray = []
        let diceObj = {}
        if (args.length < 2) { return message.channel.send("Multi Dice only works with 2 or more dice. If you wanted one die, use >>roll.") }

        for (let i = 0; i < args.length; i++) {
            diceArray.push(args[i].match(/\d+/))
        }
        for (let j = 0; j < diceArray.length; j++) {
            diceObj[j + 1] = Math.floor(Math.random() * diceArray[j]) + 1
        }
        let diceString = JSON.stringify(diceObj)
        message.channel.send(`The results are: `)
        message.channel.send(diceString.substring(1, (diceString.length - 1)).split(","))
    }
}