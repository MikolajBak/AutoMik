const spex = require("spex")(Promise);

const playSound = require("./../utils/playSound");

module.exports = {
  name: "voice-test",
  description: "testing voice detection",
  async execute(state, message, args) {
    try {
      connection = message.guild.voice.connection;
    } catch (e) {
      connection = await message.member.voice.channel.join();
    }

    const audio = connection.receiver.createStream(message.author);

    receiver = (index, data, delay) => {
      return new Promise((resolve) => {
        console.log("RECEIVED: ", index, data, delay);
        resolve();
      });
    };

    spex.stream.read(audio, receiver).then(
      (data) => {
        playSound(message, "test");
      },
      (reason) => {
        console.log("REASON:", reason);
      }
    );
  },
};
