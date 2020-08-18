module.exports = {
	name: 'setactivity',
	description: 'Change what the bot status shows',
	aliases: ["activity"],
	dev: true,
	admin: true,
	execute(message, args) {
		const client = message.guild.members.client
		const activity = args.join(" ").toString() || null
		//if(!args.length) return client.user.setActivity("null")
		client.user.setActivity(activity)
			.then(message.channel.send(`Thronebot activity set to \"${activity}\".`))
			.catch(console.error)
	}
};