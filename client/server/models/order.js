import { NumbersRounded } from "@mui/icons-material";
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
        waterType:{
            type: String
        },
        quantity: { // e.g. 1 gallon, 2 gallons
            type: Number,
            default: 1,
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
        address:{
            type: String
        },
        contactNumber:{
            type: Number
        },
        status:{
            type: String, 
            enum: ['pending', 'IP', 'FD', 'delivered', 'completed'], // IP = in-progress, FD = for-delivery
            default: 'pending',
            required: true,
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        orderDate:{
            type: Date, 
            default: Date.now,
            required: true
        },
        type:{
            type: String,
            required: true,
        },  
        items: [orderItemSchema],
        total: {
            type: Number,
            default: 0 // Default total to 0
        }
    }, {timestamps: true}
);

OrderSchema.pre('save', function(next) {
    const items = this.items;
    let total = 0;
    for (const item of items) {
        total += item.pricePerItem * item.quantity;
    }
    this.total = total;
    next();
});

const Order = mongoose.model("Order", OrderSchema)
export default Order