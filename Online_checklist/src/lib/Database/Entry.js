import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

export default mongoose.model('entry', EntrySchema); // name is users 