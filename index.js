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
    await bot.sendMessage(chatId,`
    Assalomu Alaykum ${firstname}!
    Bizning kursimiz oyiga 300ming so'm💲
    Bizning kursda manashu darslar bor: 
    `,{
      reply_markup: {
        keyboard: [
          [{ text: "Ingliz-tili"}],
          [{ text: "Rus-tili"}],
          [{ text: "Matematika"}],
          [{ text: "Dasturlash"}],
          [{ text: "Dizayn"}],
        ],
        resize_keyboard: true,
      },
    }); 
  } else if (text == Ingliz-tili) {
      await bot.sendMessage(chatId, `Siz kursga qo'shildingiz soat 14:00 da IT parkda bo'ling ${firstname}!` ,{
        reply_markup: {
          inline_keyboard:[
            [{text: "Lactasiya"}],
          ],
        },
      } );
  } else if ( text === "Lacatsiya" ) {
    await bot.sendLocation(chatId, 41.3870805, 60.3523528,)
  }
});


console.log("✅ Bot ishga tushdi");
