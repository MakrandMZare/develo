const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    prodname: { type: String, required: true, unique: true },
    proddesc: { type: String, reequired: true },
    prodimg: { type: String, required: true },
    catename: { type: Array },
    prodprice: { type: String, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);