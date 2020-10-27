const sinon = require('sinon')
const { filteredSpreadSheetsMock, spreadsheetsMock } = require('./spreadsheet')

const getAllStub = sinon.stub()
const query = { email: 'hedryan@gmail.com' }
getAllStub.withArgs('spreadsheets', query).resolves(filteredSpreadSheetsMock(query.email))

const createStub = sinon.stub.resolves(spreadsheetsMock[0]._id)


class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query)
  }

  create(collection, data) {
    return createStub(collection, data)
  }
}

module.exports = {
  MongoLibMock
}