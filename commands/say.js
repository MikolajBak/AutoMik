module.exports = {
  name: "say",
  description: "Says a given command!",
  async execute(message, args) {
    const connection = message.guild.voice.connection;

    const dispatcher = connection.play("audio/test.mp3");

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
