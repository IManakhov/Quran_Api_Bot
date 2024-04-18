import {Telegraf, Markup} from 'telegraf';
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const webUrl = 'https://quran-api.mistudio.dev/data/pagehtml/1';
var bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply('Hello my friend!!!',
    Markup.keyboard([Markup.button.webApp('Open fatiha surah', webUrl)]));
});

bot.launch();