import express from "express"
import {getUser, updateUser} from "../controller/users.js"
import {verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.get("/:id", verifyToken, getUser)
router.post("/updateProfile", updateUser)

export default router