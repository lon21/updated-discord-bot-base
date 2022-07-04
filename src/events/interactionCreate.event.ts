import { Interaction } from 'discord.js';
import botEvent from '../types/botEvent';
import bot from '../bot';

export default <botEvent> {
	run: (interaction: Interaction) => {
		if (!interaction.isCommand()) return;

		const command = bot.commands.get(interaction.commandName) || bot.aliases.get(interaction.commandName);
		console.log(bot.aliases.get(interaction.commandName));
		if (!command) return;

		command.run(interaction);
	},
}