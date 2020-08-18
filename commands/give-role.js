module.exports = {
    name: 'give-role',
    description: 'Specify a role and a user to give them that role.',
    args: true,
    aliases: ["role"],
    usage: "[Role] [@User]",
    admin: true,
    execute(message,args) {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            // Search through the roles and compare their names to the second argument passed
            let role = message.guild.roles.cache.find(role => role.name === args[0])
            let roleID = role.id
            // Find the first member mentioned
            let member = message.mentions.members.first();
            // Check to see if the member already has the role in their cached profile.
            if(member._roles.find(role => role == roleID)) return message.reply(`${member} already has role ${role.name}`)
            // Add the role!
            member.roles.add(role)
                .then(message.reply(`${member} has been given the role ${role.name}`))
                .catch(console.error);
        }
    }
}