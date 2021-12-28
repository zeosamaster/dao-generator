const fs = require("fs");
const request = require("request");
const prompt = require("./prompt");

async function read(filepath) {
  return new Promise((resolve) => fs.readFile(filepath, resolve));
}

async function download(uri, filepath) {
  await new Promise((resolve) =>
    request(uri).pipe(fs.createWriteStream(filepath)).on("close", resolve)
  );

  const file = fs.readFileSync(filepath);
  fs.unlinkSync(filepath);
  return file;
}

module.exports = async function getImage(propertyPrefix) {
  const location = await prompt.get(`${propertyPrefix}ImageLocation`);

  switch (location) {
    case "url": {
      const url = await prompt.get(`${propertyPrefix}ImageURL`);
      const filename = url.split("/").pop();
      const filepath = "./assets/" + filename;
      return await download(url, filepath);
    }
    case "path": {
      const path = await prompt.get(`${propertyPrefix}ImagePath`);
      return await read(path);
    }
    default: {
      process.exit(1);
    }
  }
};
