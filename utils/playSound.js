const tracks = require("./../audio/tracks.json");

const playSound = async (message, phrase) => {
  try {
    connection = message.guild.voice.connection;
  } catch (e) {
    connection = await message.member.voice.channel.join();
  }

  try {
    path = tracks.find((track) => track.name === phrase).path;
  } catch (e) {
    message.channel.send(`I don't know how to say ${phrase}`);
    return;
  }

  const dispatcher = connection.play(path);

  dispatcher.on("start", () => {
    console.log(`${path} started playing`);
  });

  dispatcher.on("finish", () => {
    console.log(`${path} has finished playing`);
  });

  dispatcher.on("error", console.error);
};

module.exports = playSound;
