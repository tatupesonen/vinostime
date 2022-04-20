import { COMMAND_TYPE } from '../interfaces/ICommand';
import { createCommand } from '../util/createCommand';
import { logger } from '../util/logger';

const CoinflipCommand = createCommand({
  name: 'coinflip',
  type: COMMAND_TYPE.CHANNEL,
  description: 'Performs a coin flip',
  async execute(interaction, container) {
    const x = Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails"
    interaction.reply(x);
  },
});

export default CoinflipCommand;
