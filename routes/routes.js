import Express from "express";
import mongoose from "mongoose";
import PostModel from "../models/postSchema.js";
mongoose.connect(
    "mongodb+srv://admin:capivaranegra123@curso-elaborata.fyu2nwf.mongodb.net/TESTE-TESTE"
);
const router = Express.Router();

async function getallpost(req,res){
    console.log("cheguei no post");
    try {
        const posts = await posts.find();
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).send(error.message);
      }
};

async function savePosts(req,res){
    console.log("entrou na funcao");
    const newPost = new PostModel({
    title: "req.body.title",
    description: "req.body.description",
    categories: "req.body.categories"
  });
  
  try {
    await newPost.save();
    console.log("Post inserido com sucesso!");
    res.status(201).send("createPost");
  }catch (err){
    console.log("Ocorreu um erro:", err);
    }
};

async function updateposts(req,res){
    console.log("cheguei no post");
}

async function deleteposts(req,res){
    console.log("cheguei no post");
}

router.get("/posts",getallpost) 
router.post("/posts", savePosts);
router.patch("/posts:id", updateposts);
router.delete("/posts:id", deleteposts);

export default router