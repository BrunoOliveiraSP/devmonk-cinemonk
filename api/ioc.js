

import sessaoDB from './src/database/sessaoDatabase.js'


function inject(conn) {
    sessaoDB.inject(conn);
}


export default inject;
