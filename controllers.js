import express from "express";
import repository from "./repositories.js";

const router = express.Router();

router.use(express.static("public"));

router.get("/dishes", async (req, res) => {
  const allDishes = await repository.getAllDishes();
  res.json(allDishes);
});

router.get("/dishes/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    const dish = await repository.getDish(dishId);
    res.json(dish);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.post("/dishes", async (req, res) => {
  try {
    const id = await repository.createDish(req.body);
    res.status(201).json({ id }).end();
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.patch("/dishes/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    console.log("edi", dishId);
    repository.editDish(dishId);
    res.status(200).end();
  } catch (error) {
    console.log("aqui");
    res.status(404).json(error.message);
  }
});

router.delete("/dishes/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    const id = await repository.removeDish(dishId);
    res.status(200).json({ id }).end();
  } catch (error) {
    res.status(404).json(error.message);
  }
});

export default router;
