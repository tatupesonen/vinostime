import { AxiosInstance } from 'axios';
import { Client, EmbedField, Emoji, MessageEmbed } from 'discord.js';
import { Container, DITypes } from '../container/container';
import { IApexLegendsService } from '../interfaces/IApexLegendsService';
import { MapData } from '../interfaces/IApexMapData';

type TextConvertable = Emoji | string;

export class ApexLegendsService implements IApexLegendsService {
  apiBase: AxiosInstance;
  public constructor(private readonly container: Container) {
    this.apiBase = container.getByKey<AxiosInstance>(DITypes.apexLegendsApi);
  }

  private async getMap(): Promise<MapData> {
    const { data } = await this.apiBase.get(`/maprotation?version=2`);
    return data;
  }

  private getEmoji(): TextConvertable {
    const client = this.container.getByKey<Client>(DITypes.client);
    return client.emojis.cache.find((e) => e.name === 'vinostime') ?? ':))';
  }

  public async getMapEmbed(): Promise<MessageEmbed> {
    let mapData;
    try {
      mapData = await this.getMap();
    } catch (err) {
      return new MessageEmbed({
        fields: [
          {
            name: 'API Down?',
            value:
              'Looks like the Apex Legends API is having some issues right now. Exceeded timeout of 5000ms for query',
            inline: false,
          },
        ],
      });
    }
    const embed = new MessageEmbed();
    let title;
    switch (mapData.battle_royale.current.map) {
      case 'Kings Canyon':
        title = `Parasta shittiä ${this.getEmoji()}`;
        break;
      case 'Olympus':
        title = 'Tuzu nauttii';
        break;
      case "World's Edge":
        title = "World's Kings Row Canyon Edge";
        break;
      default:
        title = mapData.battle_royale.current.map;
        break;
    }
    embed.setImage(mapData.battle_royale.current.asset);
    embed.setTitle(title);
    const fields: EmbedField[] = [
      {
        name: 'Time left',
        value: mapData.battle_royale.current.remainingTimer,
        inline: false,
      },
      {
        name: 'Next up:',
        value: `${mapData.battle_royale.next.map} for ${mapData.battle_royale.next.DurationInMinutes} minutes`,
        inline: false,
      },
    ];
    embed.setFooter('Data provided by https://apexlegendsapi.com/');
    embed.fields = fields;
    return embed;
  }
}
