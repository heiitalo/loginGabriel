import {router} from './src/routes'
import express from "express";
import {connectDataBase} from "./src/database/db"

const app = express();
connectDataBase()
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Servidor startado na porta 3333 📢📢📢"));
