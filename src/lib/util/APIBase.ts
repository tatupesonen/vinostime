import axios, { AxiosResponse } from 'axios';
import { BotInfo } from '../interfaces/BotInfo';
import { logger } from './logger';

const createResponseUrl = (response: AxiosResponse<unknown>) =>
  `https://${response.config.baseURL}${response.config.url}`;

export const createApiBases = (botInfo: BotInfo) => {
  const baseHeaders = {
    'user-agent': `${botInfo.name} discord bot version ${botInfo.version}`,
  };
  const ApexLegendsAPI = axios.create({
    baseURL: 'https://api.mozambiquehe.re',
    headers: {
      ...baseHeaders,
      Authorization: process.env.MOZAMBIQUE_HERE,
    },
    timeout: 5000,
  });

  ApexLegendsAPI.interceptors.request.use((request) => {
    logger.debug(`Requesting ${request.baseURL}${request.url}...`);
    return request;
  });

  ApexLegendsAPI.interceptors.response.use((response) => {
    response.status >= 200 && response.status <= 300
      ? logger.debug(
          `Received response from ${createResponseUrl(response)} status ${
            response.status
          }`
        )
      : logger.warn(
          `Received response from ${createResponseUrl(response)}, status ${
            response.status
          }`
        );
    //   logger.debug(`Received response from ${request.baseURL}${request.url}...`)
    return response;
  });

  return { ApexLegendsAPI };
};
