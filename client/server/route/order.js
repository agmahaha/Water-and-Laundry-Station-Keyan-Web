import  express  from "express"
import {userOrder} from "../controller/order.js"

const router = express.Router()

router.post("/orderService", userOrder)

export default router