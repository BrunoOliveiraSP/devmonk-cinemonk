import groupBy from '../utils/groupBy.js'

import SeatDatabase from '../database/seatDatabase.js'
const db = new SeatDatabase();


class SeatService {

  async getSeats(day, movie, room, hour) {
    let seats = await db.getSeats(day, movie, room, hour);
    console.log(seats);
    
    seats = seats.map(s => {
      return {
        data: s.data,
        filme: s.filme,
        hora: s.hora,
        sala: s.sala,
        letra: s.lugar.letra,
        numero: s.lugar.numero,
        situacao: s.lugar.situacao,
        usuario_id: s.lugar.usuario_id,
        expiracao: s.lugar.expiracao
    }})

    seats = groupBy(seats, 'letra').map(s => {
      return {
        letra: s.key,
        lugares: s
      }
    })
    
    return seats;
  }


}



export default SeatService;