const Command = require('./command')
const ytdl = require('ytdl-core')
const bot = require('../index')

module.exports = class Youtube {

    static match(message) {
        return message.content.startsWith('!play')
    }

    static youtubeAction(message){
        let youtubeArray = message.content.split(' ')
        const broadcastyt = bot.createVoiceBroadcast();
        let voiceChannel = message.guild.channels
            .filter((channel) => {
                return channel.type === 'voice'
            })
            .find("id", message.member.voiceChannelID);


        voiceChannel.join()
            .then(connection => {
                const stream = ytdl(youtubeArray[1], { filter : 'audioonly' })
                broadcastyt.playStream(stream)
                const dispatcher = connection.playBroadcast(broadcastyt)
                dispatcher.setVolume(0.4)
            })
            .catch(console.error)
    }
}