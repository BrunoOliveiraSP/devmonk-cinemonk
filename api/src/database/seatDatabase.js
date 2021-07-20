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
        // .collation({
        //   locale: "en_US",
        //   numericOrdering: true
        // })
        .project({ 
          "_id": 0
        })
        .toArray();
    }
}

export default SeatDatabase;

