import bot from '../bot';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands = [

].map(command => command.toJSON());

bot.commands.forEach(command => {
	if (command.deactivated || !command.run) return;

	commands.push(new SlashCommandBuilder().setName(command.name).setDescription(command.desc));
	if (command.aliases) {
		command.aliases.forEach(alias => {
			commands.push(new SlashCommandBuilder().setName(alias).setDescription(command.desc));
		});
	}
});

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(bot.user.id, '722139954523930675'), { body: commands })
	.then(() => console.log('SUccessfully deployed commands'))
	.catch(console.error);