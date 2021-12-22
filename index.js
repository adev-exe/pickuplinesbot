const { token } = require('./config.json');

const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const lines = [
    "So, aside from taking my breath away, what do you do for a living",
    "I ought to complain to Spotify for you not being named this week’s hottest single",
    "Are you a parking ticket? ‘Cause you’ve got ‘fine’ written all over you.",
    "Your eyes are like the ocean; I could swim in them all day.",
    "When I look in your eyes, I see a very kind soul.",   
    "If you were a vegetable, you’d be a ‘cute-cumber.’",
    "Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.",
    "I never believed in love at first sight, but that was before I saw you."
];


function randomLine(){
    return lines[Math.floor(Math.random() * 9)];
}

client.once('ready', () => onClientReady());

function onClientReady()
{
    client.on('message', (message) => onMessageReceived(message));
    console.log('The Discord Bot is Ready!');
}

function onMessageReceived(message)
{
    if (message.content === '!pickupline')
    {
        message.reply(randomLine());
    }
}

client.login(token);