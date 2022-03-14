"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const discord_js_1 = require("discord.js");
exports.default = (client, author, guild, user, reason) => {
    const embed = new discord_js_1.MessageEmbed()
        .setDescription(`:loudspeaker: **${author}** from **${guild}** just blacklisted **${user}** for **${reason}**.`)
        .setColor("WHITE");
    const channel = (client.channels.cache.get('950444081874616331'));
    channel.send({ embeds: [embed] });
};
exports.config = {
    dbName: 'USER_NOTIFIER',
    displayName: 'User Notifier',
};
