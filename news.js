const discord = require('discord.js')

module.exports.run = async(client, message, args) => {
let nome = new discord.MessageEmbed()
.setTitle(`<:dcl_ypSino:914350019182723122> | **Novidades do Gizmo** `)
.setDescription(`
> <:dcl_ypSino:914350019182723122> <a:1CDW:920816059358015508> Várias modificações no Gizmo.
> <:dcl_ypSino:914350019182723122> <a:2CDW:920816347879985173> Agora você pode votar no Gizmo usando **G!votar**.
`)
.setTimestamp()
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setColor('BLACK')
message.channel.send(nome)
}