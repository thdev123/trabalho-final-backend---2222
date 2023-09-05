import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const autenticationSchema = new mongoose.Schema({
    name: String,
    email: String,
    senha: Number
});

const Autentication = mongoose.model("Autentication", autenticationSchema)

router.post("/auth", async(req,res)=>{
    try {
        const auth = await Autentication.findOne({   
            email:req.body.email,
        });
        //const auth = await Autentication.find();
        console.log(auth)
        //res.status(200).json({message:"usuario encontrado", token:"123456456456"});
        if(auth === null){
            res.status(404).json({message:"usuario nao encontrado"})
        }else{  
            res.status(200).json({message:"usuario encontrado"});
        }
    } catch (err) {
        console.log(err);
    }
    // console.log(req.body);
});

export default router