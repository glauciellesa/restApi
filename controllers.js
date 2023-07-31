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

router.post("/dishes", (req, res) => {
  try {
    repository.createDish(req.body);
    res.status(201).json({ id: 1 }).end();
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.patch("/dishes/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    console.log("edi", dishId);
    repository.editDish(dishId);
  } catch (error) {
    console.log("aqui");
    res.status(404).json(error.message);
  }
});

router.delete("/dishes/:dishId", async (req, res) => {
  try {
    const dishId = req.params.dishId;
    repository.removeDish(dishId);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

export default router;
