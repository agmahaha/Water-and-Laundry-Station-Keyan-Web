import mongoose from "mongoose"

const AnnouncementSchema = new mongoose.Schema(
    {
        title:{
            type: String, 
            required: true,

        },
        body:{
            type: String, 
            required: true,
        },
        image:{
            type: String, 
            required: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
    }, {timestamps: true}
)

const Announcement = mongoose.model("Announcement", AnnouncementSchema)
export default Announcement