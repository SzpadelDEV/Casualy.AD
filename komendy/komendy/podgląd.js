const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "podgląd",
    aliases: ["podglad"],
    run: async (client, msg) => {
        if (!db.get(`reklama_${msg.guild.id}_serwera`)) {
            const embed1 = new MessageEmbed()
            .setAuthor("Reklama Twojego Serwera " + msg.guild.name, "https://discord.com/channels/@me/775770979745529867/781199357152067594")
            .setDescription("```Reklama nie została skonfigurowana!```")
            .setColor("#FF8000")
        return msg.channel.send(embed1)

        } else {
            const embed2 = new MessageEmbed()
            .setAuthor("Reklama Twojego Serwera " + msg.guild.name, "https://discord.com/channels/@me/775770979745529867/781199375921184808s://cdn.discordapp.com/emojis/735155495475740772.gif?v=1")
            .setColor("#FF8000")
            .setDescription("```" + db.get(`reklama_${msg.guild.id}_serwera`) + "```")
        return msg.channel.send(embed2)
        }
    }
}