module.exports = {
    name: 'roll',
    description: 'rolls a dice of whatever number you choose. default is a d6',
    aliases: ["d6"],
    usage: "[number]",
    execute(message,args) {
        if(!args.length) {
            let num = Math.floor((Math.random() * 6 + 1)); 
            return message.channel.send(`You rolled a ${num}!`)
        } else if(isNaN(args[0])) {
            return message.reply("That's not a number!")
        } else{
            let num = Math.floor(Math.random() * args[0]); 
            return message.channel.send(`You rolled a ${num}!`)
        }
    }
}