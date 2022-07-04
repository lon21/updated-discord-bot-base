"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../bot"));
const builders_1 = require("@discordjs/builders");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const commands = [].map(command => command.toJSON());
bot_1.default.commands.forEach(command => {
    if (command.deactivated || !command.run)
        return;
    commands.push(new builders_1.SlashCommandBuilder().setName(command.name).setDescription(command.desc));
    if (command.aliases) {
        command.aliases.forEach(alias => {
            commands.push(new builders_1.SlashCommandBuilder().setName(alias).setDescription(command.desc));
        });
    }
});
const rest = new rest_1.REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
rest.put(v9_1.Routes.applicationGuildCommands(bot_1.default.user.id, '722139954523930675'), { body: commands })
    .then(() => console.log('SUccessfully deployed commands'))
    .catch(console.error);
