import { Telegraf } from 'telegraf';
import axios from "axios";
import { uwuify } from "./uwuify.js";
import dotenv from "dotenv";

dotenv.config()

// import cool from 'cool-ascii-faces';
// import express from 'express';
// import path from 'path'
// const PORT = process.env.PORT || 5000;

// express()
//     .use(express.static(path.join(__dirname, 'public')))
//     .set('views', path.join(__dirname, 'views'))
//     .set('view engine', 'ejs')
//     .get('/', (req, res) => res.render('pages/index'))
//     .get('/cool', (req, res) => res.send(cool()))
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));


const bot = new Telegraf(process.env.API_KEY)

var yerkee = "http://yerkee.com/api/fortune"
var doggourl = "https://loremflickr.com/json/320/240/dog,puppy/all"
var cattourl = "https://loremflickr.com/json/320/240/cat,kitten/all"

let uwurray = ['uwu', 'owo', 'ewe']

bot.start((ctx) => {
    ctx.reply("HEWWO!!! OWO")
})

//echo's user input as uwutext
bot.hears(uwurray, (ctx) => {
    ctx.replyWithAnimation("https://thumbs.gfycat.com/EasygoingFalseIvorybackedwoodswallow-max-1mb.gif")
    ctx.reply(uwuify(ctx.message.text.toUpperCase()) + '!!!')
})

//TODO: make bot echo normal text messages as uwutext
//TODO: make it nlp but i cant bc im dumb
// bot.on('text', (ctx) => {
//     ctx.reply(uwuify(msg))
// })

bot.help((ctx) => {
    ctx.reply("Uwu is thewe a pwobwem?\n I can dwu dese cwommands:\n- /start\n- /wisdom\n- /catto\n- /doggo\n- /help\n- /bangbang\nI hwope dis hewps! uwuwuwuwuwuwuwuwuwuwu")
})

//send reply to sticker
//TODO: Send a sticker from the sticker pack sent by the user back to them
bot.on('sticker', (ctx) => {
    ctx.reply("owo what an uwu stwicky!")
    ctx.replyWithSticker(ctx.message.sticker)
    ctx.reply('huehuehue uwu')
})

//stops bot
//TODO: implement function to reset bot state, similar to the /done command in the stickers bot
bot.command('bangbang', (ctx) => {
    ctx.reply('uwu...owchie...you kwilled mi...?')
})

//sends catto pics
//API: https://loremflickr.com/320/240/kitten
bot.command('catto', (ctx) => {
    ctx.reply(uwuify('look at dis catto!! isnt he cute'))
    axios.get(cattourl)
        .then((res) => {
            console.log(res.data.file)
            ctx.replyWithPhoto(res.data.file)
        })
}
)

//TODO: doggos command. Send user a doggo pic.
//API: https://loremflickr.com/
bot.command('doggo', (ctx) => {
    ctx.reply(uwuify('a good boi! o lawd he comin! babey! i want to gib pats'))
    axios.get(doggourl)
        .then((res) => {
            console.log(res.data.file)
            ctx.replyWithPhoto(res.data.file)
        })

})

//TODO: noods
// sends random meme

//imparts u sum gud uwuisdom
bot.command('wisdom', (ctx) => {
    // number = Math.floor(Math.random() * 10 - 9)
    // if (number == 1) {
    //     yerkee = 'http://yerkee.com/api/fortune'
    // } else ({
    //     yerkee = 'http://yerkee.com/api/fortune/wisdom'
    // })
    axios.get(yerkee)
        .then((res) => {
            //uwuify text
            ctx.reply(uwuify(res.data.fortune))
        })
})

bot.launch()