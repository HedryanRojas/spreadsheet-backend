const express = require('express')
const superTest = require('supertest')

const { errorHandler, wrapErrors } = require('./middlewares/errorHandler')
const notFoundHandler = require('./middlewares/notFoundHandler')

function testServer(route) {
  const app = express()
  route(app)
  app.use(notFoundHandler)
  app.use(wrapErrors)
  app.use(errorHandler)
  return superTest(app)
}

module.exports = testServer