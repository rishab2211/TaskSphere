import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    },
    name:{
        type:String,
        minlength:2
    }
});

const todoSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
    },
    description:{
        type:String,
        required:true,
        minlength:1
    },

})
const User = mongoose.model("User",userSchema);
const Todo = mongoose.model("Todo",todoSchema);

module.exports = {
    User,
    Todo
};

