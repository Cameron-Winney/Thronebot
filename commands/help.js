const { execute } = require("./magic-8-ball");

module.exports = {
    name: 'help',
    description: 'Gives you list of commands.',
    execute(message) {
        message.channel.send(`
        >>help -- gives you list of commands.
        >>ping -- Pong!
        >>user-info -- gives you anyone's real username and discord ID.
        >>members -- lists how many people are in the server.
        >>roll _ -- you can put a number after and it will roll a die for you. By default it will roll 6 sided die.
        >>multi-dice -- similar to >>roll but you can roll multiple dice.
        >>coin -- I will flip a coin for you.
        >>magic-8-ball -- you can ask a question and I will give you an answer.
        THESE NEXT ONES ARE ADMIN ONLY!
        >>kick -- kicks specified user.
        >>ban -- bans specified user.`)
    }
}