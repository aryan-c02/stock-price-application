import { Router } from "express";
import { handleGetStockByName, handleGetTopTenStocks } from "../controllers/stock_controllers.js";

const router = Router();

router.get("/top", handleGetTopTenStocks)
router.get("/:id", handleGetStockByName);


export default router;