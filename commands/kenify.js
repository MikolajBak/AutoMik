const playSound = require("./../utils/playSound");

module.exports = {
  name: "kenify",
  description: "Fools Ken into thinking that I'm listening",
  execute(state, message, args) {
    if (state.kenify) {
      clearInterval(state.interval);
      state.kenify = false;
    } else {
      state.interval = setInterval(
        playSound,
        Math.floor(Math.random() * 5000),
        message,
        "yes"
      );
      state.kenify = true;
    }
  },
};
