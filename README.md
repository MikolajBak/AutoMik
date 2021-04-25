# AutoMik
Discord bot that pretends to be me listening to a conversation.

## Current Feature list
- [x] Join a discord channel
- [x] Play a given sound
- [x] Post a cute picture of a random cat
- [x] Play me saying 'yes' at a fixed interval to preted I'm listening
- [x] Respond to an emoji on the bots message and play a sound
- [ ] Play me saying 'yes' at a random interval to make it seem more believable
- [ ] Expand use of emojis for bot control (currently only messages work)
- [ ] Quiz with leaderboards


## Requirements
- [Node.js](https://nodejs.org/en/)
- Discord account and server

## How to use
You can clone this repository to create your own discord bot. Use [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) guide to learn how to set up a Discord bot application. Once you create your bot, you will need to add your authentication token to `config.json`. After all that is done you can start playing around by running `node app.js`

## Adding new sounds
To add a new playable sounds you will need to put the file in the audio folder. Then you will need to open `tracks.json` and create a new entry for the new track. First you need to give your new track a name e.g. `"name": "test"`. Then you have to specify the location of the audio file (including the file extension) `"path": "audio/test.mp3"`
