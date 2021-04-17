const playSound = require("./../utils/playSound.js");

module.exports = {
  name: "say",
  description: "Says a given command!",
  execute(message, args) {
    playSound(message, args[0]);
  },
};
