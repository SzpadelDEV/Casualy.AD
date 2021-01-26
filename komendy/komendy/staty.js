const { MessageEmbed } = require("discord.js")
let users_size = 0;
let guilds_size;

module.exports = {
    name: "staty",
    aliases: ["botinfo", "info"],
    run: async (client, msg) => {

        var os = require('os')
    var cpuStat = require('cpu-stat');

    let wLini = true;
    let cores = os.cpus().length
    let cpuModel = os.cpus()[0].model
    let channelSize = client.channels.cache.size;
    let uptime = client.ws.ping;
    let guildSize = client.guilds.cache.size;

    let botinfoembed = new MessageEmbed()
    .setColor("#FF8000")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addField("❯ __Nazwa bota__:", client.user.username, wLini)
    .addField("❯ __Prefix__:", "r!", wLini)
    .addField("❯ __Serwery__:", `🛡 ${guildSize}`) 
    .addField("❯ __Ping__:", `${uptime} ms`)
    .addField("❯ __CPU__:", `${cpuModel}`)
    .addField("❯ __Node.js__:", `${process.version}`)
    .setTimestamp();

    
    msg.channel.send(botinfoembed)

}
}
