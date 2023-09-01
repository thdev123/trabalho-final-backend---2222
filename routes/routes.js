import Express from "express";
import mongoose from "mongoose";
import postSchema from "../models/postSchema.js";
mongoose.connect(
    "mongodb+srv://admin:capivaranegra123@curso-elaborata.fyu2nwf.mongodb.net/TESTE-TESTE"
);

const router = Express.Router();

router.get("/works", (req,res)=>{
    console.log("cheguei no post");
});
router.post("/posts", (req,res)=>{
    async function savePosts(){
        const newPost = Postmodel({
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories
      });
      
      try {
      await newPost.save();
      console.log("Post inserido com sucesso!");
      res.status(201).send("createPost");
      catch (err){
      console.log("Ocorreu um erro:", err);
    }
   }
});
router.patch("/categories:id", (req,res)=>{
    console.log("cheguei no post");
});
router.delete("/posts:id", (req,res)=>{
    console.log("cheguei no post");
});

export default router;