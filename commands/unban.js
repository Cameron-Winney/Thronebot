const Discord = require("discord.js")

module.exports = {
    "name": "unban",
    "description": "Unban those deemed worthy.",
    "args": true,
    execute (message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't do that!")
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`Silly ${message.guild.me}, you attempt to access a power you do not control.`)
        let user = message.mentions.users.first()
        console.log(user)
        let Reason = args.slice(1).join(" ")
        if (!Reason) Reason = `${message.author} unbanned this user`
        message.guild.members.unban(user, Reason)
            .catch(err => {
                console.log(err)
                if(err) return message.channel.send("Runtime Error")
            })

        const banembed = new Discord.MessageEmbed()
            .setTitle('Member Unbanned')
            .addField('User Unbanned', user)
            .addField('Unbanned by', message.author)
            .addField('Reason', Reason)
            .setFooter('Time Unbanned', message.author.displayAvatarURL())
            .setTimestamp()

            message.channel.send(banembed)
    }
}