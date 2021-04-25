const fs = require("fs");

const { createCanvas } = require("canvas");

const fractal = (width, height, max_iter, zoom) => {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);

  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      let zx = 0;
      let zy = 0;
      let cX = (x - width / 2) / zoom;
      let cY = (y - height / 2) / zoom;

      let iter = max_iter;
      while (zx * zx + zy * zy < 4 && iter > 0) {
        tmp = zx * zx - zy * zy + cX;
        zy = 2.0 * zx * zy + cY;
        zx = tmp;
        iter--;
      }
      context.fillStyle = iter == 0 ? "#000" : "#fff";
      context.fillRect(x, y, 1, 1);
    }
  }

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./image.png", buffer);
};

fractal(400, 300, 100, 150);
