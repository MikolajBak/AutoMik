const playSound = require("../utils/playSound");

module.exports = {
  name: "emoji-test",
  description: "Emoji!",
  async execute(state, message, args) {
    message.react("👍").then(() => message.react("👎"));

    const filter = (reaction, user) => {
      return (
        ["👍", "👎"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      );
    };

    message
      .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
      .then((collected) => {
        const reaction = collected.first();

        if (reaction.emoji.name === "👍") {
          message.reply("You reacted with a thumbs up");
          playSound(message, "yes");
        } else {
          message.reply("You reacted with a thumbs down");
          playSound(message, "no");
        }
      })
      .catch((collected) => {
        message.reply(
          "you reacted with neither a thumbs up, not a thumbs down"
        );
      });
  },
};
