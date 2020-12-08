const express = require('express')
const studentsRoutes = require("./students")

const server = express()

const port = 3001

server.use(express.json()) // must be specified 

server.use("/students", studentsRoutes)

server.listen(port, () => {
    console.log("Server is running on port:", port)
})