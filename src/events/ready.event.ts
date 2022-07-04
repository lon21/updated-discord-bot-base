import bot from '../bot';
import botEvent from '../types/botEvent';

export default <botEvent>{
	run: async () => {
		await import(__dirname + '/../utils/deploy-commands');
		console.log(`Logged in as ${bot.user.tag}`);
		global.bot = bot;
		bot.user.setActivity(':D', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A' });
	},
}