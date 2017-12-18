const Command = require('./command')
const bot = require('../index')
module.exports = class Play extends Command {

    static playAction(message) {

        let voiceChannel = message.guild.channels
            .filter(function (channel) {
                //console.log(channel.client)
                return channel.type === 'voice'
            })
            .first()

        const broadcast = bot.createVoiceBroadcast()
        voiceChannel.join()
            .then(function (connection) {
                /*console.log(message.content)*/
                broadcast.playFile('C:\\Users\\dvine\\IdeaProjects\\MakeYourEntrance\\sounds\\' + message.content + '.mp3')
                const dispatcher = connection.playBroadcast(broadcast)
                dispatcher.setVolume(0.3)
            })
            .catch(console.error)
    }

    static newUser(user) {
        console.log(user.displayName)
        user.createDM().then(function (channel) {
            channel.send('Bienvenue' + user.displayName)
        }).catch(console.error)
        console.log("connection de " + user.displayName + " établie")
    }
}