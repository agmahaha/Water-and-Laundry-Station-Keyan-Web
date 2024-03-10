import express from "express"
import {getUser} from "../controller/users.js"
import {verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.get(":/id", verifyToken, getUser)

export default router