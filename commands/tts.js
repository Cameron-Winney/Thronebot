module.exports = {
	name: 'tts',
	description: 'Speaks your message back to you.',
	execute(message, args) {

		message.channel.send(args.join(" "),
		 {tts: true}
		 );
	},
};