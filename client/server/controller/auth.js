import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/users.js"

export const registerUser = async (req, res) => {
    try{
        const{
            username,
            email,
            password
        } = req.body

        const hash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hash
        })

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    }catch{
        res.status(500).json({ error: err.message })
    }
}

export const loginUser = async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username: username})

        if(!user)
            return res.Status(400).json({msg: "User not Found"})

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch)
            return res.Status(400).json({msg: "Password Invalid"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'}) /* Add expiration? */
        delete user.password
        res.status(200).json({token, user})
    } catch{
        res.status(500).json({ error: err.message })
    }
}