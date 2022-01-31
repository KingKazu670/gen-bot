const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();


module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/test.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/test.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .setTitle("King's Lair")
            .addField('test Account',`\`\`\`${account}\`\`\``)
            .setColor('#0345fc')
            .setFooter('test Account Only For You!')
            .setTimestamp();

            msg.author.send(embed);
            msg.channel.send(
           new Discord.RichEmbed()
            .setTitle('test')
            .setDescription('ive sent you a test product')
            .setFooter('test product')
            .setTimestamp()
            );

            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
        });
    }
};

module.exports.help = {
    name: `test`,
    description: `Sends you a test account!`
};