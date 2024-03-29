import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema(
    {
        itemName: { 
            type: String,
            required: true
        },
        type: { // is it water or laundry
            type: String,
            required: true
        },
        weight: {
            type: Number // Only if laundry
        },
        gallonType: {
            type: String // Only if water (round or slim)
        },
        numberOfItems: { // e.g. 1 gallon, 2 gallons
            type: Number,
            required: true
        },
        pricePerItem: {
            type: Number,
            required: true
        },
    }
);

const OrderSchema = new mongoose.Schema(
    {
        userID:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Users',
            required: true,
        },
        status:{
            type: String, 
            enum: ['pending', 'IP', 'FD', 'delivered', 'completed'], // IP = in-progress, FD = for-delivery
            default: 'pending',
            required: true,
        },
        isPaid: {
            type: Boolean,
            default: false
        },
        orderDate:{
            type: Date, 
            default: Date.now,
            required: true
        },
        items: [orderItemSchema]
    }, {timestamps: true}
);

const Order = mongoose.model("Order", orderSchema)
export default Announcement