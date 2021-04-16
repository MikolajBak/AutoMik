module.exports = {
  name: "join",
  description: "Join the channel you're currently in",
  async execute(message, args) {
    try {
      await message.member.voice.channel.join();
      message.delete();
    } catch (e) {
      console.error(e);
      message.channel.send("Couldn't connect to the channel");
    }
  },
};
