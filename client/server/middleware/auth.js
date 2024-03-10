import jwt from "jsonwebtoken"
import Ajv from "ajv"

export const verifyToken = async(req, res, next) => {
    try{
        const schema = {
            type: 'object',
            properties:{
                sub:{type: 'string'},
                iss:{type: 'string'},
                exp:{type: 'integer'}
            },
            required: ['sub','iss','exp'],
            additionalProperties: false
        }

        let token = req.header("Authorization")

        if (!token){
            return res.status(403).send("Access Denied")
        }

        if(token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimleft()
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        const ajv = new Ajv()
        const validate = ajv.compile(schema)
        const valid = validate(verified)

        if(!valid)
            console.error('Token does not match expected schema')
        else {
            req.user = verified
            next()
        }
        

    } catch (err){
        if(err.name === 'TokenExpiredError')
            console.error('Token has expired')
        else
            res.status(500).json({error: err.message})
    }
}