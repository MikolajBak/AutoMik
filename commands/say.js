module.exports = {
  name: "say",
  description: "Says a given command!",
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      const dispatcher = connection.play("audio/test.mp3");

      dispatcher.on("start", () => {
        console.log("audio.mp3 is now playing");
      });

      dispatcher.on("finish", () => {
        console.log("audio.mp3 has finished playing");
        connection.disconnect();
        message.delete();
      });

      dispatcher.on("error", console.error);
    }
  },
};
