module.exports = class Command {

    static parse (message) {
        if (this.match(message)) {
            this.youtubeAction(message)
            return true
        }
        return false
    }

    static match (message) {
        return false
    }
}