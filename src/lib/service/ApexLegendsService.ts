import axios from 'axios';
import { EmbedField, MessageEmbed } from 'discord.js';
import { Container } from 'winston';
import { MapData } from '../interfaces/IApexMapData';

export class ApexLegendsService {
  public constructor(private readonly _container?: Container) {}
  private async getMap(): Promise<MapData> {
    const { data } = await axios.get(
      `https://api.mozambiquehe.re/maprotation?version=2&auth=${process.env.MOZAMBIQUE_HERE}`
    );
    return data;
  }

  public async getMapEmbed(): Promise<MessageEmbed> {
    const mapData = await this.getMap();
    const embed = new MessageEmbed();
    const title = mapData.battle_royale.current.map === "Kings Canyon" ? "HYI SÄÄTÄNÄ" : mapData.battle_royale.current.map;
    embed.setImage(mapData.battle_royale.current.asset);
    embed.setTitle(title);
    const fields: EmbedField[] = [{
      name: "Time left",
      value: mapData.battle_royale.current.remainingTimer,
      inline: false
    },
  {
      name: "Next up:",
      value: `${mapData.battle_royale.next.map} for ${mapData.battle_royale.next.DurationInMinutes} minutes`,
      inline: false
    }]
    embed.setFooter("Data provided by https://apexlegendsapi.com/");
    embed.fields = fields;
    return embed;
  }
}
