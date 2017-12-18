const Command = require('./command')
const ytdl = require('ytdl-core')
const bot = require('../index')

module.exports = class Youtube extends Command {

    static match(message) {
        return message.content.startsWith('!play')
    }

    static youtubeAction(message){

        const streamOptions = { seek: 0, volume: 1 };
        const broadcastyt = bot.createVoiceBroadcast();
        let voiceChannel = message.guild.channels
            .filter(function(channel){
                return channel.type === 'voice'
            })
            .first()

        voiceChannel.join()
            .then(connection => {
                const stream = ytdl(message.content/*, { filter : 'audioonly' }*/)
                broadcastyt.playStream(stream)
                const dispatcher = connection.playBroadcast(broadcastyt)
                dispatcher.setVolume(0.4)
            })
            .catch(console.error)
                }
}