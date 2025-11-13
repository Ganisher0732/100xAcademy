import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const Token = "8574611961:AAEBL94vubBaqQXr56gc6h-NJLF7JzkbNKY";
const bot = new TelegramBot(Token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      `Assalomu alaykum, ${firstname}! Botga xush kelibsiz!`,
      {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "Yordam ❓" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (text === "📚 Kurslar") {
    await bot.sendMessage(
      chatId,
      `Bizda quyidagi kurslar mavjud:
1. Web Dasturlash
2. Mobil Dasturlash
3. Grafik Dizayn
4. Digital Marketing
5. IT Asoslari`,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Ingliz tili", callback_data: "kurs_ingliz" }],
            [{ text: "Rus tili", callback_data: "kurs_rus" }],
            [{ text: "Matematika", callback_data: "kurs_math" }],
            [{ text: "Dasturlash", callback_data: "kurs_dev" }],
            [{ text: "Grafik Dizayn", callback_data: "kurs_design" }],
          ],
        },
      }
    );
  }
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
});

console.log("✅ Bot ishga tushdi");
