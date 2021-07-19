import { toISOBRString } from "../utils/dateUtils.js";

let db;

class SessaoDatabase {
    static inject(conn) {
        db = conn.db('ingressos').collection('sessoes')
    }

    listAvailable() {
        let today = toISOBRString(new Date()).substr(0, 10);
        return db.aggregate([
            { '$match': { data: {'$gte': today } } },
            { '$project': {_id: 0, data: 1} },
            { '$group': { _id: '$data' } },
            { '$project': { data: '$_id', _id: 0 } },
            { '$sort': { data: 1 } },
            { '$limit': 7 }
        ]).toArray();
    }

    listMovies(date) {
        return db
                .find({ data: date })
                .project({ _id: 0 })
                .sort({ 'filme.nome': 1 })
                .toArray();
    }
}

export default SessaoDatabase;

