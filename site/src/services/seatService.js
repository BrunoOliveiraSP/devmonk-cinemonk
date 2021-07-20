

import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:8081/lugar'
})



export default class SeatService {

    async listSeats(day, movie, room, hour) {
        const resp = await api.get(`/?day=${day}&movie=${movie}&room=${room}&hour=${hour}`);
        return resp.data;
    }

};