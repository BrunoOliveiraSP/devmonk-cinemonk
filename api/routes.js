
import cors from 'cors'
import sessao from './src/controller/sessionController.js'
import seat from './src/controller/seatController.js'

function configureRoutes(express, server) {
    server.use(cors())
    server.use(express.json())
    server.use('/sessao', sessao);
    server.use('/lugar', seat);
}


export default configureRoutes;
