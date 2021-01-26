const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "dodaj",
    run: async (client, msg, args) => {
        if (!msg.member.roles.cache.has("780798777253429259")) return;

        if (!args[0]) {
            return msg.reply("Podaj id!")
        }

        if (!db.get(`reklama_do_${args[0]}`)) {
            return msg.reply("Nie ma takiej reklamy do zaakceptowania!")
        }

        if (!args[1]) {
            return msg.reply("Podaj numer!")
        }

        if (db.get(`reklama_${args[1]}`)) {
            return msg.reply("Reklama jest zajęta!")
        }

        db.set(`reklama_${args[1]}`, db.get(`reklama_do_${args[0]}`))
        db.set(`reklama_${args[1]}_id`, args[0])
        
        const ustawia = new Discord.MessageEmbed()
        .setAuthor("Dodano!", "https://cdn.discordapp.com/attachments/780363127376183306/780790439661928458/jap.gif")
        .setDescription("Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została dodana pod numer `" + args[1] + "`")
        .setFooter(`Weryfikowana Przez: ${msg.author.tag}`, msg.author.displayAvatarURL())
        .setColor('#FF8000')
        client.users.cache.get(db.get(`reklama_do_${args[0]}_osoba`)).send(ustawia)


        const rekkan = new Discord.MessageEmbed()
    .setAuthor("Dodano!", "https://cdn.discordapp.com/attachments/780363127376183306/780790439661928458/jap.gif")
    .setDescription("Reklama tego serwera została dodana pod numer `" + args[1] + "`!")
    .setColor('#FF8000')
    .setFooter(`Weryfikowana Przez: ${msg.author.tag}`, msg.author.displayAvatarURL())
    client.channels.cache.get(db.get(`kanal_reklama_${args[0]}`)).send(rekkan)

    const statusy = new Discord.MessageEmbed()
    .setAuthor("Dodano!", "https://cdn.discordapp.com/attachments/780363127376183306/780790439661928458/jap.gif")
    .setDescription("Reklama serwera `" + db.get(`reklama_do_${args[0]}_name`) + "` została potwierdzona aktualnie jest pod numer `" + args[1] + "`")
    .setFooter(`Weryfikowana przez: ${msg.author.tag}`, msg.author.displayAvatarURL())
    .setColor("#FF8000")
    client.channels.cache.get("781445699870130236").send(statusy)
        db.delete(`reklama_do_${args[0]}_osoba`)
        db.delete(`reklama_do_${args[0]}`)
        db.delete(`reklama_do_${args[0]}_name`)
        msg.reply("Dodano pod numer `" + args[1] + "`!")
        
    }
}