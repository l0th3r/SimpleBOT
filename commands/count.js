module.exports = {
    prefix: '',
    name: 'count',
    description: 'Update all infos of the bot (like member count).',
    exemple: '',
    set_exemple() {
        this.exemple = `${this.prefix}${this.name}`;
    },
    execute(message, args) {
        const guild = message.channel.guild;
        if(args.length < 0)
        {
            message.react('👌');
            console.log(args[0]);
            guild.channel.get(args[0]);
        }
        else
            message.reply("You need to pass the channel to modify as parameter :/");
    }
}