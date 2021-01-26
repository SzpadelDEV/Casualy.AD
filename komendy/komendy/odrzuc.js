const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "odrzuc",
    aliases: ["odrzuć"],
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("780798777253429259")) return;

        if (!args[0]) {
            return msg.reply("Podaj id!")
        }

        if (!db.get(`reklama_do_${args[0]}`)) {
            return msg.reply("Nie ma takiej reklamy w bazie danych!")
        }

        if (!args[1]) {
            return msg.reply("Podaj powód!")
        }

        const osoba = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif")
        .setDescription("Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została odrzucona z __**POWODU**__ \n`" + args.slice(1).join(" ") + "`")
        .setFooter(`Weryfikator: ${msg.author.tag} || ${msg.author.id}`, msg.author.displayAvatarURL())
        .setColor("#FF8000")
        client.users.cache.get(db.get(`reklama_do_${args[0]}_osoba`)).send(osoba)

        const kanal_reklam = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif")
        .setDescription("Reklama tego serwera została odrzucona z __**POWODU**__\n`" + args.slice(1).join(" ") + "`")
        .setColor("#FF8000")
        client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(kanal_reklam)

        const statusy = new MessageEmbed()
        .setAuthor("Odrzucono!", "https://cdn.discordapp.com/attachments/780363127376183306/780790637464518656/wrong.gif")
        .setDescription("Reklama Serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została odrzucona z __**POWODU**__ \n`" + args.slice(1).join(" ") + "`")
        .setFooter(`Weryfikowana przez: ${msg.author.tag}`, msg.author.displayAvatarURL())
        .setColor("#FF8000")
        client.channels.cache.get("781445699870130236").send(statusy)
        db.delete(`reklama_do_${args[0]}_osoba`)
        db.delete(`reklama_do_${args[0]}`)
        db.delete(`reklama_do_${args[0]}_name`)
        msg.reply("Odrzucono!")
    }

}