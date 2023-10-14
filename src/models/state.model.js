const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema(
    {
        state_id: {
            type: Number,
            default: 0
        },
        state_name: {
            type: String,
            trim: true
        },
        country_name: {
            type: mongoose.Types.ObjectId,
            ref: "country"
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const state = mongoose.model("state", stateSchema);
module.exports = state;