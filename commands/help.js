module.exports = {
    name: 'help',
    description: 'Gives you list of commands.',
    execute(message) {
        message.channel.send(
`\`\`\`
>>help -- gives you list of commands.
>>user-info -- gives you anyone's real username and discord ID.
>>members -- lists how many people are in the server.
>>roll _ -- Roll a die. The number of sides can be set. By default it will roll 6 sided die.
>>multi-dice -- Roll multiple dice, numbers are passed as the sides of the dice. 
                Example: 6 10 20 will return 3 dice of sides 6, 10, and 20.
>>coin -- Heads or Tails?
>>8ball -- Cast your question to fate!

THESE ARE ADMIN ONLY!
>>kick -- kicks specified user.
>>ban -- bans specified user.\`\`\``)
    }
}