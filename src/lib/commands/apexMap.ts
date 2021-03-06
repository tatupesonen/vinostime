import { InteractionReplyOptions } from 'discord.js';
import { DITypes } from '../container/container';
import { IApexLegendsService } from '../interfaces/IApexLegendsService';
import { COMMAND_TYPE } from '../interfaces/ICommand';
import { createCommand } from '../util/createCommand';
import { logger } from '../util/logger';

const ApexMapCommand = createCommand({
  name: 'map',
  type: COMMAND_TYPE.CHANNEL,
  description: 'Returns the current map in casual rotation for Apex Legends',
  options: [
    {
      type: 'BOOLEAN',
      name: 'show-to-others',
      description: 'If set to true, will post the embed in the channel for others to see.',
      required: false,
    },
  ],
  async execute(interaction, container) {
    // Get service
    const service = container.getByKey<IApexLegendsService>(
      DITypes.apexLegendsService
    );
    const baseReply: InteractionReplyOptions = { ephemeral: !interaction.options.getBoolean("show-to-others") ?? false };
    await interaction.deferReply(baseReply);
    try {
      const mapData = await service.getMapEmbed();
      interaction.editReply({ ...baseReply, embeds: [mapData] });
    } catch (err) {
      logger.error(err);
      interaction.editReply({
        ...baseReply,
        content: err.message,
      });
    }
  },
});

export default ApexMapCommand;
