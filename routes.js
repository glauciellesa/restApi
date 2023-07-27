import express from "express";
import { getAllDishes, getDish } from "./services.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(masterKey);
  const allDishes = getAllDishes();
  res.json(allDishes);
});

router.get("/:dishName", function (req, res) {
  const dishName = req.params.dishName.toLowerCase();
  console.log("quer", req.query);
  const dish = getDish(dishName);
  res.json(dish);
});

export default router;
