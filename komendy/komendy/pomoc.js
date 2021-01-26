const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "pomoc",
    aliases: ["help"],
    run: async (client, msg) => {
        const embed = new Discord.MessageEmbed()
    .setAuthor("Menu pomocy!", "https://cdn.discordapp.com/attachments/775770979745529867/786615156401766420/loading.gif")
    .addField("Komendy do Konfiguracji:", "`r!kanal` **Ustawia Kanał na Ktorym Bot wysyła Reklamy!**\n`r!reklama <treść>` **Ustawia Reklame Serwera**")
    .addField("Informacyjne:", "`r!podgląd`  **Pokazuje twoją Reklame!**\n`r!invite`**Wysyła Link do Bota i do Serwera Support!**")
    .setFooter(`${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)
    .setColor("#FF8000")
    msg.channel.send(embed)
    }
}
