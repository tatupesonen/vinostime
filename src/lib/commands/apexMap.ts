import { InteractionReplyOptions } from 'discord.js';
import { DITypes } from '../container/container';
import { COMMAND_TYPE } from '../interfaces/ICommand';
import { ApexLegendsService } from '../service/ApexLegendsService';
import { createCommand } from '../util/createCommand';

const ApexMapCommand = createCommand({
  name: 'map',
  type: COMMAND_TYPE.CHANNEL,
  description: 'Returns the current map in casual rotation for Apex Legends',
  async execute(interaction, container) {
    // Get service
    const service = container.getByKey<ApexLegendsService>(
      DITypes.apexLegendsService
    );
    const baseReply: InteractionReplyOptions = { ephemeral: false };
    await interaction.deferReply(baseReply);
    // Parse package.json first
    try {
      const mapData = await service.getMapEmbed();
      interaction.editReply({ ...baseReply, embeds: [mapData] });
    } catch (err) {
      interaction.editReply({
        ...baseReply,
        content: err.message,
      });
    }
  },
});

export default ApexMapCommand;
