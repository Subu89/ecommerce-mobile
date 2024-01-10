import express from "express";
import { isAdmin, isAuth } from "./../middlewares/authMiddleware.js";
import {
    changeOrderStatusController,
    createOrderController,
    getAllOrdersController,
    getMyOrdersController,
    paymentsController,
    singleOrderDetailsController,
} from "../controllers/orderController.js";

const router = express.Router();

// routes
// ================ ORDERS ROUTES ===============

// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

// GET ALL ORDERS
router.get("/my-orders", isAuth, getMyOrdersController);

// GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, singleOrderDetailsController);

// accept payments
router.post("/payments", isAuth, paymentsController);

// ======== ADMIN PART =========
// get all order
router.get("/admin/get-all-orders", isAuth, isAdmin, getAllOrdersController);

// change order status
router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStatusController);

// ===============================================

export default router;