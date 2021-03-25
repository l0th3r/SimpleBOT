module.exports = {
    prefix: '',
    name: 'wesh',
    description: 'wesh command',
    exemple: '',
    set_exemple() {
        this.exemple = `${this.prefix}${this.name}`;
    },
    execute(message, args) {
        message.channel.send("Bien ou bien le sang ?");
    }
}