import express from "express";
import data from "./data/db.json" assert { type: "json" };
import { log } from "console";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json(data.dishes);
});

app.get("/:id", function (req, res) {
  data.dishes.forEach((item, index) => {
    let itemName = item.name.toLowerCase();
    let paramId = req.params.id.toLowerCase();
    console.log(itemName);
    console.log(paramId);
    console.log(itemName.includes(paramId));
    if (itemName.includes(req.params.id)) {
      res.json(data.dishes[index]);
    } else {
      console.log("no data founded");
    }
  });
});

app.listen(port, () => {
  console.log(`using ${port}`);
});
