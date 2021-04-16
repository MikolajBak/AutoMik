module.exports = {
  name: "leave",
  description: "Leave the channel",
  async execute(message, args) {
    try {
      message.guild.voice.connection.disconnect();
      message.delete();
    } catch (e) {
      console.error(e);
      message.channel.send("Error disconnecting");
    }
  },
};
