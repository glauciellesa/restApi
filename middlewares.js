import express from "express";
import masterKey from "./config.js";

const router = express.Router();
router.use((req, res, next) => {
  if (req.query.appkey === masterKey) {
    next();
  } else {
    res.status(401).send("Invalid key");
  }
});

export default router;
