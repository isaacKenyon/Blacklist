import {ICommand} from "wokcommands";
import {Client, MessageEmbed, TextChannel} from "discord.js";

export default {
    category: 'Miscellaneous',
    description: 'Returns an embed to prove that the bot is online',

    slash: true,
    testOnly: true,

    callback: ({ interaction, text, client }) => {
        const author = interaction.user
        const embed = new MessageEmbed()
            .setDescription(`:ping_pong: Pong! **${author}**.`)
            .setColor("WHITE")
            .addFields({
                name: 'Bot Latency',
                inline: true,
                value: `${Date.now() - interaction.createdTimestamp}ms`
            },
                {
                    name: 'API Latency',
                    inline: true,
                    value: `${Math.round(client.ws.ping)}ms`
                })
        return embed
    },
} as ICommand
