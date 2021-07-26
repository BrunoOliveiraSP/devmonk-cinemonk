let db;

class SeatDatabase {
  static inject(conn) {
      db = conn.db('ingressos').collection('lugares');
  }

  getSeats(day, movie, room, hour) {
      return db.find({ 
        "data": day, 
        "filme": movie,
        "sala": room, 
        "hora": hour 
      })
      .sort({ 
        "lugar.letra": -1, 
        "lugar.numero": 1 
      })
      .project({ 
        "_id": 0
      })
      .toArray();
  }
  

  getSeat(seat) {
    return db.findOne({
      "data": seat.data,
      "filme": seat.filme,
      "hora": seat.hora,
      "sala": seat.sala,
      "lugar.letra": seat.letra,
      "lugar.numero": seat.numero
    });
  }

  
  
    async update(seat, totenId, type = 'Reservado') {
      return await db.updateOne({
        "data": seat.data,
        "filme": seat.filme,
        "hora": seat.hora,
        "sala": seat.sala,
        "lugar.letra": seat.letra,
        "lugar.numero": seat.numero
      }, {
        "$set": {
          "lugar.totenId": (type === 'Livre' ? null : totenId),
          "lugar.situacao": type
        },
        "$currentDate": {
          "lugar.expiracao": true
        }
      });
    }

  
}

export default SeatDatabase;

