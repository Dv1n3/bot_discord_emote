const fs = require('fs')

module.exports = class Help {

    static commandsHelp(message){

        let commandsList = fs.readFileSync('./commands.md', 'utf-8');
        let newMember = message.member
        newMember.createDM().then((channel) => {
            channel.send("Salut " + newMember.displayName + ", \n" + commandsList)
        })
            .catch(console.error);
        message.delete()

    }
}