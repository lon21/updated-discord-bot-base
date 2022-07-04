import bot from '../bot';
import botCommand from '../types/botCommand';

export default <botCommand> {
	name: 'ping',
	desc: 'Pokazuje ping bota',
	aliases: ['pong'],
	run: (interaction) => {
		interaction.reply(`Pong, mój ping z api discorda wynosi \`${bot.ws.ping}ms\``);
	},
}