const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db/db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000;

// start setting up json-server middlewares
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use('/api', router)

// start listening to port
server.listen(port, () => {
    console.log(`
        JSON Server is running on port ${port}
    `);
})
