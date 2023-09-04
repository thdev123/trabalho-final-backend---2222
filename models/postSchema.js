import mongoose from "mongoose";
mongoose.connect(
    "mongodb+srv://admin:capivaranegra123@curso-elaborata.fyu2nwf.mongodb.net/TESTE-TESTE"
);

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    // categories: mongoose.Schema.Types.ObjectId
    categories: String
});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel