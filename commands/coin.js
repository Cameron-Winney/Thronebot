module.exports = {
    name: 'coin',
    description: 'flips a coin for you',
    execute(message,args) {
        let coin = Math.round(Math.random());
        if(coin === 1) {
            return message.reply('The coin landed on heads!')
        } else {
            return message.reply('The coin landed on tails')
        }
    }
}