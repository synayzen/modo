const codework = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  
  const TA = new codework.MessageEmbed()
  .setColor("BLACK")
  .setTitle(`${message.guild.name}`)
  .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱  | Tüm hakları saklıdır.`)
  .setImage(message.guild.iconURL())
  message.channel.send(TA)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucupp"],
}


exports.help = {
  name: 'sunucuresmi',
  description: '𝐀𝐬𝐬𝐚𝐬𝐬𝐢𝐧𝐬 𝐂𝐫𝐞𝐞𝐝 𝐅𝐚𝐦𝐢𝐥𝐲 sunucu resmi',
  usage: 'sunucuresmi',
};
