const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const invite = new Discord.MessageEmbed()
  .setAuthor(`Para você usuário poder me ajudar e ajudar os meus desenvolvedores basta apenas votar!`, client.user.displayAvatarURL())
  .setDescription(`**<a:success:928867620462133290> Vote em mim [clicando aqui](https://voidbots.net/bot/814726444377833532)<:voidbots:742925293907607624>**`)
  .setImage("https://i.imgur.com/7wsZpGK.jpeg")
  .setColor("#8A2BE2")
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  message.channel.send(invite)
}