// Imports
const jsonServer = require('json-server')
const auth = require('json-server-auth')

// Settings
const port = 3003
const database = 'db.json'

// Creation
const app = jsonServer.create()
const router = jsonServer.router(database)
const middlewares = [jsonServer.defaults(), auth]

// Binding the router db to the app (This is needed for `auth` to work)
app.db = router.db

// We must apply the (auth) middleware before the router
app.use(middlewares)
app.use(router)

// Starting the server
app.listen(port, () => {
  console.log(`RealBillApi is running on ${port}`)
})
