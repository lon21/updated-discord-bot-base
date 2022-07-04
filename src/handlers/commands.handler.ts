import { readdirSync } from 'fs';
import bot from '../bot';

readdirSync(__dirname + '/../commands').forEach(async file => {
	if (!file.includes('.command.') || file.includes('--')) return;

	const command = await import(__dirname + `/../commands/${file}`);

	if (!command.default.name) throw new Error('Error with importing file: '+ file  + '\nYou have to specify a command name!');
	if(!command.default.desc || !command.default.run) {
		console.log(`There was an errror when importing command "${command.default.name}"`);
		command.default.deactivated = true;
		return bot.commands.set(command.default.name, command.default);
	};

	bot.commands.set(command.default.name, command.default);

	if (command.default.aliases) {
		if (!Array.isArray(command.default.aliases)) command.default.aliases = [command.default.aliases];
		command.default.aliases.forEach(alias => {
			if (bot.aliases.get(alias) !== undefined) return;
			bot.aliases.set(alias, command.default);
		});
	}
});