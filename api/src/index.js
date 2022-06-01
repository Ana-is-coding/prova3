import 'dotenv/config'
import { con } from './repository/connection.js'
import usuarioController from './controller/usuarioController.js' 
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

// configuração dos endpoinst
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API CONECTADA na porta ${process.env.PORT}`));