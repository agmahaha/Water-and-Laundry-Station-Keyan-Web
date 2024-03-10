import express from "express"
import {login} from "../controller/auth.js"

const router = express.Router()

router.post("/loginUser", login)

export default router