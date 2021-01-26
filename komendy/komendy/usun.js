const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")


module.exports = {
    name: "usun",
    aliases: ["usuń"],
    run: async (client, msg, args) => {
        if(!msg.member.roles.cache.has("780798777253429259")) return;

        if (!args[0]) {
            return msg.reply("Podaj numer reklamy!")
        }

        if (!args[1]) {
            return msg.reply("Podaj powód!")
        }

        if (!db.get(`reklama_${args[0]}`)) {
            return msg.reply("W bazie danych nie ma takiej reklamy!")
        }

        db.delete(`reklama_${args[0]}`)
        db.delete(`reklama_${args[0]}_id`)
        const statusy = new MessageEmbed()
        .setAuthor("Usunięto!", "https://cdn.discordapp.com/emojis/735602128629923941.gif?v=1")
        .setDescription("Reklama o numerze `" + args[0] + "` została usunięta z __**POWODU**__\n`" + args.slice(1).join(" ") + "`")
        .setFooter(`Przez: ${msg.author.tag}`, msg.author.displayAvatarURL())
        .setColor("#FF8000")
        client.channels.cache.get("780816689012146217").send(statusy)
        msg.reply("Usunięto reklame o numerze `" + args[0] + "`!")
    }
}