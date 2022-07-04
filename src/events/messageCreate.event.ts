import botEvent from '../types/botEvent';
import bot from '../bot';
import { Message, MessageEmbed } from 'discord.js';
import { inspect } from 'util';

export default <botEvent>{
	run: (message: Message) => {
		if (!bot.config.owners.includes(message.author.id) || !message.content.startsWith('!')) return;

		const args = message.content.slice(1).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (command === 'eval') {
			(async () => {
				try {
					const toEval = args.join(' ');

					let evaled = await eval(toEval);
					const type = typeof evaled;

					if (type !== 'string') evaled = inspect(evaled);

					const embed = new MessageEmbed().setColor('#00ff00').setAuthor({ name: 'Eval' }).addField('> Kod', `\`\`\`js\n${toEval}\`\`\``).addField('> Status', `\`\`\`js\n${evaled ?? 'none'}\`\`\``).addField('> Typ:', '```js\n' + type + '```');
					message.reply({ embeds: [embed] });
				} catch (err) {
					message.reply({
						embeds: [new MessageEmbed()
							.setAuthor({ name: 'Eval Errror' })
							.setColor('#ff0000')
							.setDescription('```js\n' + err + '\`\`\`'),
						]
					})
				}
			})();
		}
	},
}