const ytdl = require('ytdl-core')

const playSound = async (message, url) => {
  try {
    connection = message.guild.voice.connection;
  } catch (e) {
    connection = await message.member.voice.channel.join();
  }

  const stream = ytdl(url, { filter : 'audioonly' });
  const dispatcher = connection.play(stream);

  dispatcher.on("start", () => {
    console.log(`${url} started playing`);
  });

  dispatcher.on("finish", () => {
    console.log(`${url} has finished playing`);
  });

  dispatcher.on("error", console.error);
};

module.exports = playSound;
