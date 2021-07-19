
import express from 'express'
import mongodb from 'mongodb'

import setRoutes from './routes.js'
import inject from './ioc.js'


const startServer = (conn) => {
    inject(conn);

    const server = express();
    setRoutes(express, server)

    server.listen(
        process.env.PORT,
        () => console.log(`...: server started on port ${process.env.PORT}`))
}

const stopServer = (e) => {
    console.log(e);
    process.exit(-1);
}

const MongoClient = mongodb.MongoClient;
MongoClient
    .connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net', { useUnifiedTopology: true })
    .then(startServer)
    .catch(stopServer)

    