import { Router } from "express";
import { handleRegister, handleLogin, handleAddFavourites, handleGetFavourite, handleDeleteFavourite } from "../controllers/user_controllers.js";
const router = Router();

router.get("/register", handleRegister)
router.get("/login", handleLogin);

// middleware check before adding
router.get("/favourites", handleGetFavourite)
router.post("/favourites", handleAddFavourites);
router.delete("/favourites", handleDeleteFavourite)

export default router;