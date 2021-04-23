module.exports = {
  name: "ping",
  description: "Ping!",
  execute(state, message, args) {
    message.reply("Pong!");
    console.log(args);
  },
};
