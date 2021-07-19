
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:8081/sessao'
})


export default class SessionService {
    async listSessions() {
        const resp = await api.get('/');
        return resp.data;
    }
}