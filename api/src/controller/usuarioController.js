import { login } from '../repository/usuarioRepository.js'
import { Router } from 'express'
const server = Router();
 

server.post('./usuario/login', async(req,resp) => {
     try {
          const {email, senha} = req.body;
          const resposta = await login(email, senha);   
          resp.send(resposta)
          if(resposta) {
               throw new Error('Credenciais inválidas')
          }
     } 
     catch (err) {
         resp.status(400).send({
              erro : 'Ocorreu um erro'
         });
     }
})
export default server;

