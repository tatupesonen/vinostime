import { Client } from 'discord.js';
import dotenv from 'dotenv';
import { createBot } from './lib/bot';
import { Container, DITypes } from './lib/container/container';
dotenv.config();

import { ApexLegendsService } from './lib/service/ApexLegendsService';

const bootstrap = async () => {
  const container = new Container();
  // Register dependencies
  const apexService = new ApexLegendsService();
  container.set<ApexLegendsService>(apexService, DITypes.apexLegendsService);
  const { client: bot } = await createBot(container);
  container.set<Client>(bot, DITypes.client);
  bot.login(process.env.DISCORD_TOKEN);
};
bootstrap();
