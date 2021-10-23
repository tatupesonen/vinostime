import { MessageEmbed } from "discord.js";

export interface IApexLegendsService {
	getMapEmbed(): MessageEmbed | Promise<MessageEmbed>;
}