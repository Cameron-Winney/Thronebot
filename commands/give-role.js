const { Guild } = require("discord.js")
const { guildOnly } = require("./ban")

module.exports = {
    name: 'give-role',
    description: 'you can specify a role and a user and give them said role.',
    execute(message,args) {
        if (message.member.hasPermission("MANAGE_ROLES")) {

            let role = message.guild.roles.find(r => r.name === args[0]);

            // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
            let member = message.mentions.members.first();
            
            // or the person who made the command: let member = message.member;
            
            // Add the role!
            member.addRole(role).catch(console.error);
        }
    }
}