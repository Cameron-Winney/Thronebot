module.exports = {
    name: 'ban',
    description: 'bans specified user',
    execute(message) {
            let member = message.mentions.members.first();
            member.ban().then((member) => {
                message.channel.send(member.displayName + " has been banned!")
            })
        
    
    }
}