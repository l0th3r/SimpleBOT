
module.exports = {
    prefix: '',
    name: 'help',
    description: 'Command to list all available commands.',
    exemple: '',
    set_exemple() {
        this.exemple = `${this.prefix}${this.name}`;
    },
    execute(message, args) {
        message.channel.send("Check your messages ;)");
    }
}