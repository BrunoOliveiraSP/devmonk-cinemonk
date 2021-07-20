
import { Router } from 'express'
import SessionService from '../service/sessionService.js'

const router = Router();
const service = new SessionService();


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