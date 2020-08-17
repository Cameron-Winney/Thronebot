module.exports = {
    name: 'remove-role',
    description: 'Specify a role and a user to give them that role.',
    args: true,
    aliases: ["rmrole", "remove"],
    usage: "[Role] [@User]",
    execute(message,args) {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            // Search through the roles and compare their names to the second argument passed
            let role = message.guild.roles.cache.find(role => role.name === args[0])
            let roleID = role.id
            // Find the first member mentioned
            let member = message.mentions.members.first();

            // Run if user doesn't have the role/ returns undefined.
            if(!member._roles.find(role => role == roleID)) return message.reply(`${member} doesn't have role ${role.name}`)
            
            // Remove the role!
            member.roles.remove(role)
                .then(message.reply(`${member}\'s ${role.name} role has been removed.`))
                .catch(console.error);
                
            
        }
    }
}