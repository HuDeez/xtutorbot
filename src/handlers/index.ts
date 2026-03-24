import { Bot } from 'grammy';
import { startHandler } from './start';

export function registerHandlers(bot: Bot) {
  startHandler(bot);
}
