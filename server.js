const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const userRouters = require('./routers/userRoutes')
app.use('/users', userRouters)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`We're live on ${PORT}`)
  routesReport.print()
})
