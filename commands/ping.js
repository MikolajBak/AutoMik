module.exports = {
  name: "ping",
  description: "Ping!",
  execute(message, args) {
    message.reply("Pong!");
    console.log(args);
  },
};
