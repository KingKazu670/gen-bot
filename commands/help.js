const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://i.imgur.com/b5MVGYq.png')
.setFooter('©️ CopyRight Para™️')
.addField('__Help__','__**GENERATOR COMMANDS**__\n\n`$spotify` To Get A Spotify Account .\n`$hulu` To Get A Hulu Account .\n`$minecraft` To Get A Minecraft Account .\n`$nitro` To Get A Nitro Code .\n`$nordvpn` To Get A NordVPN Account .\n`$origin` To Get A Origin Account .\n`$proxy` To Get A Proxy .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
