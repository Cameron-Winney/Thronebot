module.exports = {
	name: 'magic-8-ball',
	description: 'Cast your question to fate!',
	args: true,
	aliases : ["8ball", "fate"],
	usage: "Your Question Here",
	execute(message, args) {
		const responses = ["As I see it, yes.", "Ask again later.", "Ask again later.", "Cannot predict now.", 
		"Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.",
		"Most likely.","My reply is no.","My sources say no.","Outlook not so good.","Outlook good.",
		"Reply hazy, try again."," Signs point to yes."," Very doubtful.","Without a doubt.","Yes.",
		"Yes – definitely.","You may rely on it."];
		let num = Math.floor((Math.random() * responses.length));
		return message.reply(responses[num])
	}
}