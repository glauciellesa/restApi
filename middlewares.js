import express from "express";
import masterKey from "./config.js";

const router = express.Router();
router.use((req, res, next) => {
  if (!masterKey || req.query.appkey === masterKey) {
    next();
  } else {
    res.status(401).send("Invalid key");
  }
});

/* router.use(express.urlencoded({ extended: true })); */
router.use(express.json());

export default router;
