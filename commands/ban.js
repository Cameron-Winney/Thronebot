module.exports = {
    name: 'ban',
    description: 'bans specified user',
    guildOnly: true,
    execute(message) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            const author = message.author
            const member = message.mentions.members.first();
            if(author === member) return message.reply(`You can\'t ban yourself!`)
            member.ban().then((member) => {
                message.channel.send(member.displayName + " has been banned!")
            })
        } else {
            message.reply(`${message.author} cannot wield the power of the Throne to Ban:tm:`)
        }
    }
}