const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    aliases: ["invite", "zapros", "zaproś", "Engir.ADV", "bot", "linki"],
    run: async (client, msg) => {
        const linki = new Discord.MessageEmbed()

    .setTitle(":link: Linki do bota Casualy.Ad!")
    .setColor('#FF8000')
    .addField("Support:", ">  Serwer Support Bota Casualy.Ad [Kliknij](https://discord.gg/DYcqRJeqWy) jeśli potrzebujesz Pomocy z Botem!")
    .addField("Dodaj bota:", ">  Link do Bota Casualy.Ad [Kliknij](https://discord.com/oauth2/authorize?client_id=780415759393226762&permissions=8&scope=bot)")
    .setFooter(`Użyte przez ${msg.author.tag} `, `${msg.author.displayAvatarURL()}`)
    msg.channel.send(linki)
    }
    
}
