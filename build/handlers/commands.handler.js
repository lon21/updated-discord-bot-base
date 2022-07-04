"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs_1 = require("fs");
const bot_1 = __importDefault(require("../bot"));
(0, fs_1.readdirSync)(__dirname + '/../commands').forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
    if (!file.includes('.command.') || file.includes('--'))
        return;
    const command = yield Promise.resolve().then(() => __importStar(require(__dirname + `/../commands/${file}`)));
    if (!command.default.name)
        throw new Error('Error with importing file: ' + file + '\nYou have to specify a command name!');
    if (!command.default.desc || !command.default.run) {
        console.log(`There was an errror when importing command "${command.default.name}"`);
        command.default.deactivated = true;
        return bot_1.default.commands.set(command.default.name, command.default);
    }
    ;
    bot_1.default.commands.set(command.default.name, command.default);
    if (command.default.aliases) {
        if (!Array.isArray(command.default.aliases))
            command.default.aliases = [command.default.aliases];
        command.default.aliases.forEach(alias => {
            if (bot_1.default.aliases.get(alias) !== undefined)
                return;
            bot_1.default.aliases.set(alias, command.default);
        });
    }
}));
