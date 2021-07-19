
import cors from 'cors'
import sessao from './src/controller/sessaoController.js'


function configureRoutes(express, server) {
    server.use(cors())
    server.use(express.json())
    server.use('/sessao', sessao);
}


export default configureRoutes;
