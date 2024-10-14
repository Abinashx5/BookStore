import mongoose from "mongoose";
const bookschema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:String,
            required:true,
        },
        
    },
    {
        timestamp:true,
    }
)
export const Book=mongoose.model('Cat', bookschema);