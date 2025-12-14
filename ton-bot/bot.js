require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to Mini TON Portal!', {
        reply_markup: {
            inline_keyboard: [[
                { text: '🔷 Launch App', web_app: { url: 'https://crypto-project-taupe.vercel.app' } }
            ]]
        }
    });
});

bot.setMyCommands([{ command: 'start', description: 'Launch the mini app' }]);

bot.setChatMenuButton({
    menu_button: {
        type: 'web_app',
        text: '🚀 Launch App',
        web_app: { url: 'https://crypto-project-taupe.vercel.app' }
    }
});

// ---------- Broadcast ----------
const admins = [1066536052]; // ← your ID
bot.onText(/\/broadcast/, async (msg) => {
    const userId = msg.from.id;
    if (!admins.includes(userId)) return bot.sendMessage(msg.chat.id, "❌ Admin only");
    const text = msg.text.replace("/broadcast", "").trim();
    if (!text) return bot.sendMessage(msg.chat.id, "Usage: /broadcast <message>");
    const users = new Set();
    bot.onText(/\/start/, (m) => users.add(m.chat.id));
    let sent = 0;
    for (const id of users) { try { await bot.sendMessage(id, `📢 Broadcast:\n${text}`); sent++; } catch { } }
    bot.sendMessage(userId, `✅ Broadcast sent to ${sent} users`);
});

console.log('Bot is running...');