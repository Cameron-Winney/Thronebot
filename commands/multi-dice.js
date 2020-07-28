module.exports = {
    name: "multi-dice",
    description: "Roll multiple dice. Each number will be parsed as a unique die.", // Potential format: [num]d[sides]
    execute(message, args){
        let diceArray = []
        let diceObj = {}
        if (args.length < 2) { return message.channel.send("Multi Dice only works with 2 or more dice. If you wanted one die, use !roll.") }
        
        for (let i = 0; i < args.length; i++) {
            diceArray.push(args[i].match(/\d+/))
        }
        if (diceArray[1] !== undefined) {
            for (let j = 0; j < diceArray.length; j++) {
                diceObj[j] = Math.floor(Math.random() * diceArray[j]) + 1
            }
        }
        message.channel.send(`The results are: `)
        for (const property in diceObj){
            message.channel.send(`${parseInt(property) + 1}: ${diceObj[property]}`)
        }
    }
}