const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = 3003

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`BilleyApi is running on ${port}`)
})
