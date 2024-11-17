import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js"



const maxAge = 2 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, {
        expiresIn: maxAge
    })
}

export const signup = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).send("Email, password and name is required");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).send("Email already exists");
        }

        const user = await User.create({ email, password, name });

        res.cookie("jwt", createToken(email, user.id), {
            maxAge,
            secure: true,
            sameSite: "None"
        })

        return res.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        })
    } catch (err) {
        console.log(err.message);

    }
}


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Email and password is required");
        }

        const userExist =await User.findOne({email});

        if(!userExist){
            return res.status(404).send("User does not exist")
        }

        if(userExist.password != password){
            return res.status(401).send("Password is not correct");
        }

        const token = createToken(email,userExist.id);

        res.cookie("jwt", token, {
            maxAge,
            secure: true,
            sameSite: "None"
        })


        return res.status(200).json({
            user:{
                name:userExist.name,
                email:email,
                jwt:token
            }
        })


    } catch (err) {
        console.log(err.message);

    }
}
