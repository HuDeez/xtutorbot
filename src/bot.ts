import { settings } from '../config/settings';
import { Bot } from 'grammy';
import { registerHandlers } from './handlers';

const bot = new Bot(settings.BOT_TOKEN);
registerHandlers(bot);
bot.start();
