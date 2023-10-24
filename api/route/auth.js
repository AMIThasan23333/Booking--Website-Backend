
import express  from "express";
import { login, register } from "../Controllers/auth.js";

const router = express.Router();

router.post("/register", register )
router.post("/register", login )

export default router;
