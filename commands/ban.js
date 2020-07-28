module.exports = {
    name: 'ban',
    description: 'bans specified user',
    guildOnly: true,
    execute(message) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            let member = message.mentions.members.first();
            member.ban().then((member) => {
                message.channel.send(member.displayName + " has been banned!")
            })
        } else {
            message.reply("User does not have ban permissions!")
        }
    }
}