require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.TOKEN, { polling: true })
bot.on("polling_error", console.log)

bot.on('message', (msg) => {

    bot.sendMessage(msg.chat.id, "Assalomu alekum " + msg.chat.username)
})