const jsonServer = require("json-server")
const taskMateServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()

const port = 4000 || process.env.PORT

taskMateServer.use(middleware)
taskMateServer.use(router)

taskMateServer.listen(port, () => {
    console.log("Task Mate JSON server is up and ready to listen");
})