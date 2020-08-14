
module.exports = {
	name: 'setactivity',
	description: 'Change what the bot status shows',
	execute(message, args) {
        client.user.Activity(args.join("")); 

        
	},
};