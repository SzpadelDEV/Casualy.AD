const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "reklama",
    run: async (client, msg, args) => {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
            const brak_uprawnien = new MessageEmbed()
            .setAuthor("Odmowa dostępu!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setColor("RED")
            .setDescription("`Nie posiadasz Uprawnień do Zarządzania Serwera!`")
        return msg.channel.send(brak_uprawnien)
        }

        if (db.get(`reklama_do_${msg.guild.id}`)) {
            const czeka = new MessageEmbed()
            .setAuthor("Wystąpił Problem!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setDescription("`Reklama czeka na Weryfikacje przez Support Bota!`")
            .setColor("RED")
            return msg.channel.send(czeka)
        }

        if (!db.get(`kanal_reklama_${msg.guild.id}`)) {
            const brak_kanału = new MessageEmbed()
            .setAuthor("Wystąpił problem!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setDescription("`Musisz ustawić Kanał do Reklam!`")
            .setColor("RED")
        return msg.channel.send(brak_kanału)
        }

        if (!args[0]) {
            const brak_reklamy = new MessageEmbed()
            .setAuthor("Wystąpił Problem!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setDescription("`Podaj twoją Reklame!`")
            .setColor("RED")
        return msg.channel.send(brak_reklamy)
        }

        if (args.join(" ").includes("@here")) {
            const nie_dawać_here_do_reklamy = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setDescription(`${msg.author.username} Usuń here z reklamy.`)
            .setColor("RED")
            return msg.channel.send(nie_dawać_here_do_reklamy)
           }
        
           if (args.join(" ").includes("@everyone")) {
            const nie_dawać_evryone_do_reklamy = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setDescription(`${msg.author.username} Usuń everyone z reklamy.`)
            .setColor("RED")
            return msg.channel.send(nie_dawać_evryone_do_reklamy)
           }
            
           if (args.join(" ").includes("discord.gg/" || "https://discord.gg/" || "discordapp.com/invite/" || "https://discordapp.com/invite/")) {
            const nie_dodawaj_linku = new Discord.MessageEmbed()
            .setAuthor("Błąd!", "https://media.discordapp.net/attachments/775770979745529867/781199354274250772/wrong.gif")
            .setDescription(`${msg.author.username} Usuń z reklamy zaproszenie, bot sam dodaje.`)
            .setColor("RED")
           return msg.channel.send(nie_dodawaj_linku)

	
         if (args.join(" ").length > 1000) {
            const za_duzo = new MessageEmbed()
            .setAuthor("Reklama posiada za dużo Zanków!")
            .setColor('RED')
        return msg.channel.send(za_duzo)
        }
           }
           msg.channel.createInvite({
            maxAge: 0
            }).then(invite => { 
                db.set(`reklama_do_${msg.guild.id}`, args.join(" ") + `\nhttps://discord.gg/${invite.code}`)
                db.set(`reklama_do_${msg.guild.id}_name`, msg.guild.name)
                db.set(`reklama_do_${msg.guild.id}_osoba`, msg.author.id)
                db.set(`reklama_${msg.guild.id}_serwera`, args.join(" ") + `\nhttps://discord.gg/${invite.code}`)
            
            const reply = new MessageEmbed()
            .setAuthor("Pomyślnie Ustawiono!", "https://media.discordapp.net/attachments/775770979745529867/781199370786701322/jap.gif")
            .setDescription(`Reklama tego serwera została wysłana do weryfikacji!`)
            .setColor('#FF8000')
            msg.channel.send(reply)

            const spr_reklam = new MessageEmbed()
            .setAuthor("Nowa reklama do sprawdzenia!", "https://media.discordapp.net/attachments/775770979745529867/781199370786701322/jap.gif")
            .setDescription("Serwer: `" + msg.guild.name + " || " + msg.guild.id + "`\nOsoba: `" + msg.author.username + " || " + msg.author.id + "`")
            .addField("Treść:", "`" + db.get(`reklama_do_${msg.guild.id}`) + "`")
            .addField("Zaproszenie kliknij", `[**Zaproszenie**](https://discord.gg/${invite.code})`)
            client.channels.cache.get("786634380843810826").send(spr_reklam)
            client.channels.cache.get("786634380843810826").send("@everyone")

        })
    }
}
