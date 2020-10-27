const assert = require('assert')
const proxyquire = require('proxyquire')

const { spreadsheetsMock, filteredSpreadSheetsMock } = require('../utils/mocks/spreadsheet')
const InjectorMock = require('../utils/mocks/injector')
const testServer = require('../utils/testServer.js')

const email = 'hedryanrojas@gmail.com'

describe('routes - spreadsheets', function () {
  const routes = proxyquire('../routes/spreadsheet', {
    '../utils/injector': InjectorMock
  })

  const request = testServer(routes)

  describe('GET /spreadsheets', function () {

    it('should respond with status 200', done => {
      request.get(`/api/spreadsheet/?email=${email}`).expect(200, done)
    })

    it('should respond with status 400 because of wrong email', done => {
      request.get('/api/spreadsheet/?email=wrong.email').end((err, res) => {
        assert.deepEqual(res.body, {
          'statusCode': 400,
          'error': 'Bad Request',
          'message': '"email" must be a valid email'
        })
      })
      done()
    })

    it('should respond with a list of spreasheet given an email', done => {
      request.get(`/api/spreadsheet/?email=${email}`).end((err, res) => {
        assert.deepEqual(res.body, {
          data: filteredSpreadSheetsMock(email),
          message: 'spreadsheets listed'
        })
      })
      done()
    })

    it('should response with specific spreadsheet given an id', done => {
      request.get('api/spreadsheet/5ed83a0b3900f212ac740e1c').end((err, res) => {
        assert.deepEqual(res.body, spreadsheetsMock[0])
      })
      done()
    })
  })

  describe('POST /spreadsheets', function(){
    it('should respond with status 201', done => {
      request.post('/api/spreadsheet/').send(spreadsheetsMock[0]).end((err, res)=>{
        assert.deepEqual(res.body, {
          data:spreadsheetsMock[0]._id,
          message:'spreadsheet saved'
        })
      })
      done()
    })
  })

})


