
import axios from 'axios'
import { TOTEN_ID } from './config'


const api = axios.create({
    baseURL: 'http://localhost:8081/lugar',
    headers: { 'totenid': TOTEN_ID }
})




export default class SeatService {

    async listSeats(day, movie, room, hour) {
        const resp = await api.get(`/?day=${day}&movie=${movie}&room=${room}&hour=${hour}`);
        return resp.data;
    }

    async reserveSeat(seatInfo) {
        let resp;
        
        try {
            resp = await api.put(`/reserve`, seatInfo);
            return {
                success: resp.status === 200,
                reservedType: resp.data.reservedType,
            }
        } catch (e) {
            return {
                success: false,
                error: e.response.data.error
            }
        }
    }

};


