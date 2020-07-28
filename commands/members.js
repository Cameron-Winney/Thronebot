module.exports = {
    name:'members',
    description: 'lists how many members are in the server',
    execute(message,args) {
        message.channel.send(`There are currently ${message.guild.memberCount} members in ${message.guild.name}`)

    }
}