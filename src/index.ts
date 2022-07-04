import { config } from 'dotenv'; config();
import { readdirSync } from 'fs';

readdirSync(__dirname + '/handlers').forEach(file => {
	if (!file.includes('.handler.') || file.startsWith('--')) return;

	import(__dirname + `/handlers/${file}`);
});