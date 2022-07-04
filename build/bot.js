"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = __importDefault(require("./config"));
class Bot extends discord_js_1.Client {
    constructor(clientOptions) {
        super(clientOptions);
        this.config = config_1.default;
        this.events = new discord_js_1.Collection();
        this.aliases = new discord_js_1.Collection();
        this.commands = new discord_js_1.Collection();
        this.login(process.env.BOT_TOKEN);
    }
}
const bot = new Bot({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.DIRECT_MESSAGES] });
exports.default = bot;
