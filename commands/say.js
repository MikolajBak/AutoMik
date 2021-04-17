const tracks = require("./../audio/tracks.json");

module.exports = {
  name: "say",
  description: "Says a given command!",
  async execute(message, args) {
    const connection = message.guild.voice.connection;

    try {
      path = tracks.find((track) => track.name === args[0]).path;
    } catch (e) {
      message.channel.send(`I don't know how to say ${args[0]}`);
      return;
    }

    try {
      const dispatcher = connection.play(path);
    } catch (e) {}

    dispatcher.on("start", () => {
      console.log("audio.mp3 is now playing");
    });

    dispatcher.on("finish", () => {
      console.log("audio.mp3 has finished playing");
      message.delete();
    });

    dispatcher.on("error", console.error);
  },
};
