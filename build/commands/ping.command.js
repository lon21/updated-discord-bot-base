"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../bot"));
exports.default = {
    name: 'ping',
    desc: 'Pokazuje ping bota',
    aliases: ['pong'],
    run: (interaction) => {
        interaction.reply(`Pong, mój ping z api discorda wynosi \`${bot_1.default.ws.ping}ms\``);
    },
};
