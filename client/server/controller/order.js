import Order from "../models/order.js"

export const userOrder = async (req, res) => {
    try{
        const{
            userID,
            address,
            contactNumber,
            items
        } = req.body

        const newUserOrder = new Order({
            userID,
            address,
            contactNumber,
            items
        })

        const savedUserOrder = await newUserOrder.save()
        res.status(201).json(savedUserOrder)

    } catch(err){
        res.status(500).json({error: err.message})
    }
}