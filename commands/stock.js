const Discord = require('discord.js')
const Client = new Discord.Client({intents: ["GUILDS", "GUILDS_MESSAGES"]})

const member = msg.mentions.members.first() || message.member,
user = member.user;

const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Users Info", true)
        .setColor("#9B59B6", true )
        .addField("Full Username:", `${message.author.username}${message.author.discriminator}`, true)
        .addField("ID:", message.author.id, true)
        .addField("Created at:", message.author.createdAt, true)
        .addField("Status:", `${user.presence.status}`, true)
        .addField("Game:", `${user.presence.game}`, true)
        .addField("Roles", member.roles.map(r => `${r}`).join('|'), true)
        .addField("Messages sent", userdata[message.author.username].messagesSent, "messages", true);

        message.channel.send(embed);