const start = require("./src");

async function app() {
  try {
    await start();
  } catch (error) {
    console.log(error);
  }
}

app();
