"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../bot"));
const discord_js_1 = require("discord.js");
const util_1 = require("util");
exports.default = {
    run: (message) => {
        if (!bot_1.default.config.owners.includes(message.author.id) || !message.content.startsWith('!'))
            return;
        const args = message.content.slice(1).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'eval') {
            (() => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const toEval = args.join(' ');
                    let evaled = yield eval(toEval);
                    const type = typeof evaled;
                    if (type !== 'string')
                        evaled = (0, util_1.inspect)(evaled);
                    const embed = new discord_js_1.MessageEmbed().setColor('#00ff00').setAuthor({ name: 'Eval' }).addField('> Kod', `\`\`\`js\n${toEval}\`\`\``).addField('> Status', `\`\`\`js\n${evaled !== null && evaled !== void 0 ? evaled : 'none'}\`\`\``).addField('> Typ:', '```js\n' + type + '```');
                    message.reply({ embeds: [embed] });
                }
                catch (err) {
                    message.reply({
                        embeds: [new discord_js_1.MessageEmbed()
                                .setAuthor({ name: 'Eval Errror' })
                                .setColor('#ff0000')
                                .setDescription('```js\n' + err + '\`\`\`'),
                        ]
                    });
                }
            }))();
        }
    },
};
