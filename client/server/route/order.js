import  express  from "express"
import {getAllOrders, userOrder} from "../controller/order.js"

const router = express.Router();

router.post("/orderService", userOrder);
router.get("/adminOrder", getAllOrders);

export default router