module.exports = {
    name: 'remove-role',
    description: 'Specify a role and a user to give them that role.',
    args: true,
    aliases: ["rmrole", "remove"],
    execute(message,args) {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            // Search through the roles and compare their names to the second argument passed
            let role = message.guild.roles.cache.find(role => role.name === args[0])
            let roleID = role.id
            // Find the first member mentioned
            let member = message.mentions.members.first();
            // Check to see if the member doesn't have the role in their cached profile.
            if(member._roles.find(role => role.id == roleID)) {
            // Remove the role!
            member.roles.remove(role)
                .then(message.reply(`${member} has been given role ${role.name}`))
                .catch(console.error);
            } else { // Run if user doesn't have a roll or it finds undefined.
                return message.reply(`${member} doesn't have role ${role.name}`)
            }
        }
    }
}