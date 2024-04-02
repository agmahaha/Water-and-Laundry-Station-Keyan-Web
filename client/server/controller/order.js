import Order from "../models/order.js"

export const userOrder = async (req, res) => {
    console.log("went in");
    try{
        const{
            userID,
            address,
            contactNumber,
            type,
            items
        } = req.body
        console.log("got in");

        const newUserOrder = new Order({
            userID,
            address,
            contactNumber,
            type,
            items
        })
    console.log("again in");


        const savedUserOrder = await newUserOrder.save()
    console.log("save in " + savedUserOrder);

        res.status(201).json(savedUserOrder)

    } catch(err){
        res.status(500).json({error: err.message})
    }
}

export const getAllOrders = async (req, res) => {
    try {
        console.log("went in");
        const orders = await Order.find();
        console.log("testing: " + orders);
        res.status(200).json(orders);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}