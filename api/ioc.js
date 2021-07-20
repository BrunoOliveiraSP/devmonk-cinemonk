

import sessaoDB from './src/database/sessionDatabase.js'
import seatDB from './src/database/seatDatabase.js'


function inject(conn) {
    sessaoDB.inject(conn);
    seatDB.inject(conn);
}


export default inject;
