import groupBy from '../utils/groupBy.js'

import SeatDatabase from '../database/seatDatabase.js'
const db = new SeatDatabase();


class SeatService {

  async getSeats(day, movie, room, hour) {
    let seats = await db.getSeats(day, movie, room, hour);
    
    seats = seats.map(s => {
      return {
        data: s.data,
        filme: s.filme,
        hora: s.hora,
        sala: s.sala,
        letra: s.lugar.letra,
        numero: s.lugar.numero,
        situacao: s.lugar.situacao,
        totenId: s.lugar.totenId,
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



  async reserve(seat, totenId) {
    let { lugar: { situacao, expiracao } } = await db.getSeat(seat);
    
    
    
    let type = 'Reservado';
    
    if (situacao === 'Ocupado')
      throw 'Lugar já está ocupado';
    
    if (situacao === 'Reservado') {
      let now = new Date();
      let reserved = new Date(expiracao);
      
      let seconds = (now - reserved) / 1000;
      if (seconds < 300) {
        if (totenId !== seat.totenId) 
          throw 'Lugar já está ocupado'
        else {
          type = 'Livre'
        }
      }
      
    }

    await db.update(seat, totenId, type);
    return type;
  }


}



export default SeatService;