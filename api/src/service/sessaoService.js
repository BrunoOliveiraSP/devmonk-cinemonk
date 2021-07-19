import { getDay, getMonth, getWeekDay  } from "../utils/dateUtils.js";

import SessaoDatabase from '../database/sessaoDatabase.js'
const db = new SessaoDatabase();

class SessaoService {
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

export default SessaoService;
