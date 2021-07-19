
import { Router } from 'express'
import SessaoService from '../service/sessaoService.js'

const router = Router();
const service = new SessaoService();


router.get('/', async (req, resp) => {
    try {
        let dates = await service.listAvailable();
        resp.send(dates);    
    } catch (e) {
        resp.status(500).send({
            error: 'An error has ocurred. Try later.'
        })
    }
})


router.get('/filmes/:date', async (req, resp) => {
    try {
        let movies = await service.listMovies(req.params.date);
        resp.send(movies);    
    } catch (e) {
        resp.status(500).send({
            error: 'An error has ocurred. Try later. ' + e
        })
    }
})

export default router;