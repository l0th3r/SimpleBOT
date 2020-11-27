const fs = require('fs');

//DISCORD SETUP
const { Client, MessageEmbed, Collection } = require('discord.js');
const client = new Client();
const PREFIX = '!';

// COMMANDS COLLECTION
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    command.prefix = PREFIX;
    command.set_exemple();
    client.commands.set(command.name, command);
}

var help_message = () => {
    var str = 'Simple BOT commands:\n';
    var temp = '';
    var command;
    var quotes = '```'

    for(const file of commandFiles) {
        command = require(`./commands/${file}`);

        temp = `${quotes}Command: ${command.name}
Description: ${command.description}
Example of use: "${command.exemple}"${quotes}`;
        str = str + temp;
    }
    return str;
}

client.once('ready', () => {
    console.log('== SimpleBot is ON');
});

client.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();


    //catch commands
    if(command === 'help') {
        var temp = help_message();
        message.author.send(temp);
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'wesh') {
        client.commands.get('wesh').execute(message, args);
    }
});


// connect to the bot
client.login('NzgxOTY5NjQxMzU4NDkxNjU4.X8FX-g.egZ00PfZHyZaZUoeRkkJ9JgPQTQ');