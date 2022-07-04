"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../bot"));
exports.default = {
    run: (interaction) => {
        if (!interaction.isCommand())
            return;
        const command = bot_1.default.commands.get(interaction.commandName) || bot_1.default.aliases.get(interaction.commandName);
        console.log(bot_1.default.aliases.get(interaction.commandName));
        if (!command)
            return;
        command.run(interaction);
    },
};
