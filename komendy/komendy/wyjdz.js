const Discord = require("discord.js")

module.exports = {
    name: "wyjdz",
    run: async (client, msg, args) => {
        if (msg.author.id !== "768702975576899614")  return;

        if (!args[0]) {
            return msg.channel.send("Podaj id!")
        }

        if (!client.guilds.cache.get(args[0])) {
            return msg.reply("Bot nie jest na serwerze o id `" + args[0] + "`!")
        }

        client.guilds.cache.get(args[0]).leave()
        msg.channel.send(`Bot wyszedł!`)
    }
}
