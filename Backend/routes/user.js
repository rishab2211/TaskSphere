const express = require("express");
const router = express.Router();
const zod = require("zod");
const { UserTodo, todos, inProgress, completed } = require("../mongooseDB");
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config");

const userSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {

    const { success, data } = userSchema.safeParse(req.body);

    if (!success) {
        res.status(400).json({
            message: "validation failed, Incorrect input",
            errors: error.errors
        })
    }

    const doesUserExist = await UserTodo.findOne({
        username: data.username
    })

    if (doesUserExist) {
        return res.status(409).json({
            message: "Username already taken"
        })
    }

    const UserInDB = await UserTodo.create(data);

    const UserId = UserInDB._id;

    todos.create(UserId);
    inProgress.create(UserId);
    completed.create(UserId);

    const token = jwt.sign({
        UserId: UserId,
    }, JWT_SECRET)


    res.json({
        message: "User registered successfully",
        token
    })

})


const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {

    const { success, data, error } = signinSchema.safeParse(req.body);

    if (!success) {

        

        res.status(400).json({
            message: "Incorrect inputs/type error",
            error : error
        })
    }

    const doesUserExist = await UserTodo.findOne({
        username: data.username,
        password: data.password
    });

    if (doesUserExist) {
        // Generate JWT token
        const token = jwt.sign(
            { userId: doesUserExist._id },
            JWT_SECRET
        );

        return res.json({
            token: token
        });
    }

    res.status(401).json({
        message: "Invalid username or password"
    });







})


module.exports = router