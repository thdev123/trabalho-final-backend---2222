import Express from "express";
import mongoose from "mongoose";
import PostModel from "../models/postSchema.js";
import workModel from "../models/worksSchema.js"
// mongoose.connect(
//     "mongodb+srv://admin:capivaranegra123@curso-elaborata.fyu2nwf.mongodb.net/TESTE-TESTE"
// );
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.URI_MONGO);

const router = Express.Router();

async function getallpost(req,res){
    console.log("cheguei no post");
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).send(error.message);
      }
};

async function savePosts(req,res){
    console.log("entrou na funcao");
    const newPost = new PostModel({
    title: req.body.title,
    description: req.body.description,
    categories: req.body.categories
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
    console.log("entrou");
    // const userId = req.params.id;
    const postId = req.body.idToBeMofified;
    const updateData = req.body;
    try {
      const updatedpost = await PostModel.updateOne({ _id: postId }, updateData);
      if (updatedpost.nModified === 0) {
        res.status(404).send("Nenhum usuário encontrado no banco!");
      } else {
        res.status(200).json({ message: "Usuário Atualizado!" });
      }
    } catch (error) {
      console.log("Ocorreu um erro", error);
      res.status(500).send(error);
    }
}

async function deleteposts(req,res){
    console.log("cheguei no delete");
    const postId = req.params.id;
    console.log(postId);
    try {
      const deletedPost = await PostModel.deleteOne({
        _id: postId,
      });
      if (deletedPost.deletedCount === 0) {
        res.status(404).send("Nenhum post encontrado no banco!");
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
}

router.get("/posts",getallpost) 
router.post("/posts", savePosts);
router.patch("/posts/:id", updateposts);
router.delete("/posts/:id", deleteposts);

async function getallworks(req,res){
    console.log("cheguei no post");
    try {
        const works = await workModel.find();
        res.status(200).json(works);
      } catch (error) {
        res.status(500).send(error.message);
      }
};

async function saveworks(req,res){
    console.log("entrou na funcao");
    const newWork = new workModel({
    title: req.body.title,
    description: req.body.description,
    categories: req.body.categories
  });
  
  try {
    await newWork.save();
    console.log("work inserido com sucesso!");
    res.status(201).send("creatework");
  }catch (err){
    console.log("Ocorreu um erro:", err);
    }
};

async function updateworks(req,res){
    console.log("entrou");
    // const userId = req.params.id;
    const workId = req.body.idToBeMofified;
    const updateData = req.body;
    try {
      const updatedwork = await workModel.updateOne({ _id: workId }, updateData);
      if (updatedwork.nModified === 0) {
        res.status(404).send("Nenhum work encontrado no banco!");
      } else {
        res.status(200).json({ message: "work Atualizado!" });
      }
    } catch (error) {
      console.log("Ocorreu um erro", error);
      res.status(500).send(error);
    }
}

async function deleteworks(req,res){
    console.log("cheguei no delete");
    const workId = req.params.id;
    console.log(workId);
    try {
      const deletedwork = await workModel.deleteOne({
        _id: workId,
      });
      if (deletedwork.deletedCount === 0) {
        res.status(404).send("Nenhum work encontrado no banco!");
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
}

router.get("/works",getallworks) 
router.post("/works", saveworks);
router.patch("/works/:id", updateworks);
router.delete("/works/:id", deleteworks);

export default router