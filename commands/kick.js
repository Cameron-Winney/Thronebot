const { execute } = require("./members");

module.exports = {
    name: 'kick',
    description: 'kicks specified user',
    execute(message,args) {
                const user = message.mentions.users.first();
                let reason = args[2]
    
                if (user) {
                    const member = message.guild.member(user);
    
                    if (member) {
                        member
                            .kick(`${reason}`)
    
                            .then(() => {
                                message.reply(`Successfully kicked ${user.tag} for ${reason}`);
                            })
                            .catch(err => {
                                message.reply(`I was unable to kick the member!`)
    
                                console.error(err);
                            })
                    } else {
                        message.reply("That user isn't in the server!")
                    }
                }
                else {
                    message.reply("You didn't mention the user to kick!")
                }
        }
    }