import express from "express";
import controllers from "./controllers.js";
import middlewares from "./middlewares.js";

const app = express();
const port = 3000;

app.use(middlewares);
app.use(controllers);

app.listen(port, () => {
  console.log(`You are using ${port}`);
});
