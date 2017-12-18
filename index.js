
const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = bot
const Play = require('./commands/play')
const Youtube = require('./commands/youtube')
const Help = require('./commands/help')

bot.on('ready', function(connection) {
    bot.user.setAvatar('./skull.jpg').catch(console.error)
})

/*bot.on('guildMemberAdd', (user) => {
    Play.newUser(user)
})*/

bot.on('message', (message/*, user, guild, author*/) => {

    /*if(message.content === '!help')
        Help.commandsHelp(message, author, user, member, guild)*/

    if(message.content === '!help')
        Help.commandsHelp(message)

    if(message.content.startsWith('!play'))
        Youtube.parse(message)

    if(message.content.startsWith('!'))
        Play.playAction(message)

})

bot.login('Mzg4MzIxODMwMDMwODAyOTQ0.DQrUlg.RnRck7o9oeoWVCIeP4Bro9l8F1w')