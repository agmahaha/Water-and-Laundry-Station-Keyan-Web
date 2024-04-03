import  express  from "express"
import {getAllOrders, updateOrder, userOrder} from "../controller/order.js"

const router = express.Router();

router.post("/orderService", userOrder);
router.put("/update/:id", updateOrder);
router.get("/adminOrder", getAllOrders);

export default router