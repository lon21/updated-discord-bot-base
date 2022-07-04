import { Client, ClientOptions, Collection, Intents } from 'discord.js';
import botCommand from './types/botCommand';
import botEvent from './types/botEvent';
import config from './config';

class Bot extends Client {

	config: typeof config;

	events: Collection<string, botEvent>;
	aliases: Collection<string, botCommand>;
	commands: Collection<string, botCommand>;

	constructor(clientOptions?: ClientOptions) {
		super(clientOptions);

		this.config = config;

		this.events = new Collection();
		this.aliases = new Collection();
		this.commands = new Collection();

		this.login(process.env.BOT_TOKEN);
	}
}

const bot = new Bot({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES ] });
export default bot;