<div align="center">
  <img src="https://user-images.githubusercontent.com/7150217/127782061-8a600d38-cede-4438-be38-ba1f1ce4e243.png"/>
  <h1>vinostime</hi>
  

</div>
Just a fun bot for my friend's server.

# Commands
`/map` gets the current map in casual mode of Apex Legends.

# Invite

If you wish to invite the bot to your server, you can do it using this [invite](https://discord.com/api/oauth2/authorize?client_id=901527607437320193&permissions=68608&scope=applications.commands%20bot)

## Required Permissions

- Read Messages
- Send Messages
- application.commands scope

## Getting Started ⚙️

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

- Docker
- Docker Compose (compatible with docker-compose version 3.8)

## For development
- Yarn
- Node.js >= 16.6.0

Get the Docker version you need [here](https://hub.docker.com/search?q=docker&type=edition&offering=community)!


### Setup

~~Since this bot has a **docker-compose.yml** file and is hosted on [DockerHub](https://hub.docker.com/r/nnari/vinostime), all you need to start your own version of vinostime locally is to `clone` this repository and set up the **.env** file.~~

~~The **.env** file is used to configure the bot token and owner id, in the following format:~~

```
DISCORD_TOKEN=<insert token>
OWNER=<insert owner id>
MOZAMBIQUE_HERE=<insert apex legends API key>
```

#### For **Linux** and **Mac** run

```console
$ cp .env.example .env
```

#### For **Windows** run

```powershell
> Copy-Item .env.example .env
```

Edit the **.env** file with your favourite editor, filling out the following properties:

- **DISCORD_TOKEN** (you can find the bot token under `https://discord.com/developers/applications/bot-id/bot` for an overview of all your bots visit https://discord.com/developers/applications)
- **OWNER** ([Where can I find my User/Server/Message ID?](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-))
- **MOZAMBIQUE_HERE** ([Get your API key here](https://apexlegendsapi.com/))

Run the bot via `docker-compose`

```console
$ docker-compose up --build --detach
```

# Without Docker

Create the `.env` file like before.  
Then run `yarn && yarn dev` to start a development environment.

## Authors 👤

- **Tatu Pesonen** - _Original Author_ - [@tatupesonen](https://github.com/tatupesonen)

## Show your support ⭐️

Give a ⭐️ if this project helped you!

## License 📝

Copyright © 2021 [Tatu Pesonen](https://github.com/tatupesonen) <br>
This project is [GPLv3](LICENSE) licensed.
