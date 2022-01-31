const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ree = new Discord.RichEmbed()
  .setTitle('Invite me')
  .setThumbnail('https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPtNDLt43nAhXKAewKHYh4D08QjRx6BAgBEAQ&url=https%3A%2F%2Fdotesports.com%2Fcounter-strike%2Fnews%2Fcomplexitys-straightline-decline-11692&psig=AOvVaw3pfBs1U93XQFV2aa4IeJ7h&ust=1579446668668487')
  .setColor("#363940")
  .setFooter('©️ CopyRight Para™️')
  .setDescription('Press"invite me" so you can invite the bot!') 
  .setURL('https://discord.gg/RFeDkhm')
  
  message.channel.send(ree)
  
}
module.exports.help = {
  name: "invite",
}  
  