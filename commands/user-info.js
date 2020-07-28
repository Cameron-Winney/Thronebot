module.exports = {
    name: 'user-info',
    description: `Gives you anyone's real username and discord ID`,
    execute(message,args) {
        let member = message.mentions.members.first();
        message.channel.send(`the username is ${member.displayName}\nThe ID is ${member.id}`)
    }
}