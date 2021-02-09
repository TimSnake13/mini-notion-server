const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello From Express!");
});

app.listen(port, () => {
  console.log(`Express server up and runing at http://localhost:${port}`);
});
