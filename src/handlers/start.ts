import { Bot } from 'grammy';

export function startHandler(bot: Bot) {
  bot.command('start', async (ctx) => {
    const user = (await ctx.getAuthor()).user;
    const username = user.username ?? user.first_name;
    await ctx.reply(`Hello, ${username}!`);
  });
}
