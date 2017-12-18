const fs = require('fs')

module.exports = class Help {

    static commandsHelp(message, GuildMember/*, author, user, guild*/){

        let commandsList = fs.readFileSync('./commands.md', 'utf-8')

        //console.log(message.member.displayName)
        //console.log(GuildMember)
        let newMember = message.member
        console.log("_______________" + newMember.displayName + "________________")
        newMember.createDM().then((channel) => {
            return channel.send("Salut " + newMember.displayName + ", \n" + commandsList)
                .catch(console.error)
        })
        //message.reply('test')
        //user.send('test')
        //author.send('test')
        //guild.defaultCahnnel.sendMessage('test').catch(console.error)
    }
}