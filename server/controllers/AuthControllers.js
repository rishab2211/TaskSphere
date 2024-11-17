import jwt from "jsonwebtoken";
import { User } from "../models/UserModel"

export const signup = () => {

    try{const maxAge = 2 * 24 * 60 * 60 * 1000;

    const createToken = (email, userId) => {
        return jwt.sign({ email, userId }, process.env.JWT_KEY, {
            expiresIn: maxAge
        })
    }

    const signup = async (res, req, next) => {
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
    }}catch(err){
        console.log(err.message);
        
    }
}