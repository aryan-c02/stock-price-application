import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },

    open: Number,
    close: Number,
    high: Number,
    low: Number,
    prevClose: Number,
}, {
    timestamps: true,
})


const Stock = mongoose.model("Stocks", stockSchema);

export default Stock;