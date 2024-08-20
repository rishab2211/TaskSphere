const mongoose = require("mongoose");

const { Schema } = mongoose;
require("dotenv").config();

const dbUrl = process.env.dbURL;


mongoose.connect(dbUrl);

const userTodoSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const userTodos = new Schema({
    todos: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "UserTodo"
        }
    }]
})
const inProgressTodos = new Schema({
    todos: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "UserTodo"
        }
    }]
})
const completedTodos = new Schema({
    todos: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "UserTodo"
        }
    }]
})


const UserTodo = mongoose.model("UserTodo", userTodoSchema);
const todos = mongoose.model("Todos",userTodos);
const inProgress = mongoose.model("InProgress",inProgressTodos);
const completed = mongoose.model("Completed",completedTodos);


module.exports = {UserTodo,todos,inProgress,completed};