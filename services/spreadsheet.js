const MongoLib = require('../lib/mongo')
const boom = require('@hapi/boom')

class SpreadSheetService {

  constructor() {
    this.database = new MongoLib()
  }

  async getSpreadSheets(email) {
    const query = { email }
    const spreadsheets = await this.database.getAll('spreadsheet', query)
    return spreadsheets || []
  }

  async getSpreadSheet(id) {
    const spreadsheet = await this.database.get('spreadsheet', id)
    if(!spreadsheet) throw boom.notFound()
    return spreadsheet
  }

  async createSpreadSheet(spreadsheet) {
    return await this.database.create('spreadsheet', spreadsheet)
  }

  async updateSpreadSheet(id, spreadsheet) {
    const updatedSpreadSheetId = await this.database.update(
      'spreadsheet',
      id,
      spreadsheet
    )
    return updatedSpreadSheetId
  }

  async deleteSpreadSheet(id) {
    const deletedSpreadSheetId = await this.database.delete('spreadsheet', id)
    return deletedSpreadSheetId
  }
}

module.exports = SpreadSheetService