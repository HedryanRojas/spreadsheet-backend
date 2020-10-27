const express = require('express')
const app = express()
const cors = require('cors')

const { config } = require('./config/index')
const spreadsheetApi = require('./routes/spreadsheet')

const { errorHandler, wrapErrors, logErrors } = require('./utils/middlewares/errorHandler')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

app.use(cors({
  origin: config.cors
}))
app.use(express.json())

spreadsheetApi(app)

app.use(notFoundHandler)

app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)


app.listen(config.port, function () {
  if (config.dev) {
    console.log(`Listening http://localhost:${config.port}`)
  }
})
