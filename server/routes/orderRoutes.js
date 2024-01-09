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