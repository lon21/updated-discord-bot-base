import { CommandInteraction } from 'discord.js';

export default interface botCommand {
	name: string;
	aliases?: string[];
	desc: string;
	deactivated?: boolean;
	run: (interaction: CommandInteraction) => {};
}