import express from "express";
import masterKey from "./config.js";
import { getAllDishes, getDish } from "./services.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(masterKey);
  const allDishes = getAllDishes();
  res.json(allDishes);
});

router.get("/:dishName", function (req, res) {
  const dishName = req.params.dishName.toLowerCase();
  console.log(req.query);
  /* { id: 'spaghetti&appid=fdggavcyyatexcda' } */
  const dish = getDish(dishName);
  res.json(dish);
});

export default router;
