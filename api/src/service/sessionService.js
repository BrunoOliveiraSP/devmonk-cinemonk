import { getDay, getMonth, getWeekDay  } from "../utils/dateUtils.js";

import SessionDatabase from '../database/sessionDatabase.js'
const db = new SessionDatabase();

class SessionService {
    async listAvailable() {
        let dates = await db.listAvailable();
        return dates.map(item => {
            return {
                data: item.data,
                dia: getDay(item.data),
                diaSemana: getWeekDay(item.data),
                mes: getMonth(item.data)
            }
        })
    }

    listMovies(date) {
        return db.listMovies(date);
    }
}

export default SessionService;
