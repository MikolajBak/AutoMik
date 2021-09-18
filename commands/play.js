const playSong = require("./../utils/playSong.js");

module.exports = {
    name: "play",
    description: "Play a song from youtube",
    execute(state, message, args) {
      playSong(message, args)
    },
  };
  