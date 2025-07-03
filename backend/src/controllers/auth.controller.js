import bcrypt from "bcryptjs";
import {db} from "../libs/db.js"


export const register= async (req, res)=>{
    const {email, password, name}= req.body;

    try {
        const exisitingUser= await db.user.findUnique({
            where: {
                email
            }
        })
        if(exisitingUser){
            return res.status(400).json({
                error: "User already exists"
            })
        }

        const hashedPassword= await bcrypt.hash(password, 10);
        
    } catch (error) {
        
    }

}



export const login= async (req, res)=>{}



export const logout= async (req, res)=>{}



export const check= async (req, res)=>{}