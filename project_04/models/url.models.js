import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique:true
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})

const urlShort = mongoose.model("urlshort",urlSchema);
export {urlShort}