const fs = require("fs");

const fractal = require("./../utils/fractal.js");

module.exports = {
  name: "math-magic",
  description: "Create some magicala maths!",
  async execute(state, message, args) {
    try {
      fractal(
        parseInt(args[0]), // width
        parseInt(args[1]), // height
        parseInt(args[2]), // max iter
        parseInt(args[3]) // zoom
      );
    } catch (e) {
      console.error(e);
      message.channel.send(
        "I need 4 arguments for: width, height, max iterations and zoom"
      );
      return;
    }
    message.channel
      .send({
        files: ["image.png"],
      })
      .then((mes) => {
        mes.react("⬆️");
        mes.react("⬇️");
        mes.react("⬅️");
        mes.react("➡");
        mes.react("➖");
        mes.react("➕");
      });
  },
};
