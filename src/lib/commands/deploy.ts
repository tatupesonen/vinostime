import { ApplicationCommandData, Client } from 'discord.js';
import { COMMANDS } from '../bot';

import { COMMAND_TYPE } from '../interfaces/ICommand';
import { createCommand } from '../util/createCommand';

const DeployCommand = createCommand({
  name: 'deploy',
  description: "Deploys the bot's slash commands and context menus",
  type: COMMAND_TYPE.LEGACY,
  async execute(interaction, container) {
    // Get dependencies
    const client = container.getByKey<Client>('client');
    if (interaction.author.id !== process.env.OWNER) return;
    const slashCommands: ApplicationCommandData[] = Object.entries(COMMANDS)
      .filter(
        ([_, value]) =>
          value.type === COMMAND_TYPE.CHANNEL ||
          value.type === COMMAND_TYPE.SLASH
      )
      .reduce((acc, cur) => {
        acc.push(cur[1]);
        return acc;
      }, []);
    await client.application.commands.set(slashCommands);
    interaction.reply(`Registered ${slashCommands.length} commands.`);
  },
});

export default DeployCommand;
