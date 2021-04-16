const Discord = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "ping") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();

      const dispatcher = connection.play("audio/test.mp3");

      dispatcher.on("start", () => {
        console.log("audio.mp3 is now playing");
      });

      dispatcher.on("finish", () => {
        console.log("audio.mp3 has finished playing");
        connection.disconnect();
        msg.delete();
      });

      dispatcher.on("error", console.error);
    }
  }
});

client.login(process.env.TOKEN);
