import Express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import authroutes from "./routes/authroutes.js"
// mongoose.connect(
//     "mongodb+srv://admin:capivaranegra123@curso-elaborata.fyu2nwf.mongodb.net/TESTE-TESTE"
// );

import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.URI_MONGO);


const app = Express();

app.use(Express.json());

app.use("/api", authroutes);
app.use("/api", routes);

app.listen(3000,()=>{
    console.log("Servidor rodando!");
});