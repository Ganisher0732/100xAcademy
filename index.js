import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

const Token = "8574611961:AAEBL94vubBaqQXr56gc6h-NJLF7JzkbNKY";
const bot = new TelegramBot(Token, { polling: true });


bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;

   if (text === "/start") {
    await bot.sendMessage(chatId,`Assalomu alaykum, ${firstname}! Botga xush kelibsiz!` , {
        reply_markup: {
            keyboard: [
                [{text: "100x Academy Fanlari 👨‍💻"}],
                [{text: "Ro'yhatdan o'tish"}],
            ],
        },
    });
  }
});


console.log("Bot ishga tushdi");
