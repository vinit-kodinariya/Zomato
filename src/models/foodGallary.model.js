const mongoose = require("mongoose")
const config = require("../config/config")

const foodGallarySchima = new mongoose.Schema(
    {
        food_name: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true,
        },
        food_desc: {
            type: String,
            trim: true
        },
        price: {
            type: mongoose.Types.ObjectId,
            ref: "orderDetails"
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                data.image = `${config.base_url}images/${data.image}`
            }
        }
    }
);
const foodGallary = mongoose.model("foodGallary", foodGallarySchima)
module.exports = foodGallary;