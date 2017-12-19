const Command = require('./command')
const bot = require('../index')
module.exports = class Play {

    static playAction(message) {
        //message.clearReactions()
        if(message.member.voiceChannel === undefined)
            message.author.send("Vous devez être dans un channel pour utiliser les emotes");

        else {
            let voiceChannel = message.guild.channels
            .filter((channel) => {
                return channel.type === 'voice'
            })
            .find("id", message.member.voiceChannelID);

            const broadcast = bot.createVoiceBroadcast();
            voiceChannel.join()
                .then((connection) => {
                    broadcast.playFile('./sounds/' + message.content + '.mp3');
                    const dispatcher = connection.playBroadcast(broadcast);
                    dispatcher.setVolume(0.95)
                })
                .catch(console.error)
        }
        message.delete()
            //.catch(console.error)
    }

    static newUser(user, guild) {
        console.log('ok')
        console.log(user.displayName)
        user.createDM().then((channel) => {
            channel.send('Bienvenue ' + user.displayName)
        }).catch(console.error);
        //console.log("connection de " + user.displayName + " établie")

        let voiceChannel = guild.channels
            .filter((channel) => {
                return channel.type === 'voice'
            })
            .first();

        console.log(voiceChannel);

        const broadcast = bot.createVoiceBroadcast();
        voiceChannel.join()
            .then((connection) => {
                broadcast.playFile('./sounds/member/test.mp3');
                const dispatcher = connection.playBroadcast(broadcast);
                dispatcher.setVolume(0.45)
            })
            .catch(console.error);
    }
}
