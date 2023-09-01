import Express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
mongoose.connect(
    "mongodb+srv://admin:capivaranegra123@curso-elaborata.fyu2nwf.mongodb.net/my_portifólio"
);

const app = Express();

app.use("/api", routes);

app.listen(3000,()=>{
    console.log("Servidor rodando!");
});