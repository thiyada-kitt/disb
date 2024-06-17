import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder().setName('pause').setDescription('Pauses the music');
export async function execute({ client, interaction }) {
  const queue = client.player.nodes.get(interaction.guildId);

  if (!queue) return await interaction.editReply('There are no songs in the queue');

  queue.node.pause();
  await interaction.editReply('Music has been paused! Use `/resume` to resume the music');
}