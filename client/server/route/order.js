import  express  from "express"
import {getAllOrders, updateOrder, userOrder, getUserOrders} from "../controller/order.js"

const router = express.Router();

router.post("/orderService", userOrder);
router.get("/userOrders/:userId", getUserOrders);
router.put("/update/:id", updateOrder);
router.get("/adminOrder", getAllOrders);

export default router