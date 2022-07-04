import { readdirSync } from 'fs';
import bot from '../bot';

readdirSync(__dirname + '/../events').forEach(async file => {
	if (!file.includes('.event.') || file.startsWith('--')) return;

	const event = await import(__dirname + `/../events/${file}`);
	const eventName = file.split('.')[0];

	bot.events.set(eventName, event.default);

	if (event.default.block || !event.default.run) {
		event.default.deactivated = true;
		bot.events.set(eventName, event.default);
		return;
	};

	bot.on(eventName, (args) => { event.default.run(args) });
});