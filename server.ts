import {router} from './src/routes'
import express from "express";
import {connectDataBase} from "./src/database/db"
import cors from "cors"

const app = express();
app.use(cors());
connectDataBase()
app.use(express.json());
app.use(router);
const porta = 3300

app.listen(porta, () => console.log(`Servidor startado na porta ${porta} 📢📢📢`));
