const spreadsheetsMock = [
  {
    '_id': '5ed83a0b3900f212ac740e1c',
    'email': 'hedryanrojas@gmail.com',
    'name': 'spreadsheet',
    'data': {
      'A1': {
        'value': 'hi',
        'row': 1,
        'column': 1,
        'display': 'hi'
      }
    }
  },
  {
    '_id': '5ed857e02383b1412cbf23c8',
    'email': 'hedryanrojas@gmail.com',
    'name': 'spreadsheet2',
    'data': {
      'A1': {
        'value': '=sum(1,2)',
        'row': 1,
        'column': 1,
        'display': '3'
      }
    }
  },
  {
    '_id': '7ed856f02383b1412cif23c0',
    'email': 'jose@gmail.com',
    'name': 'spreadsheet12',
    'data': {
      'A1': {
        'value': '=4x4',
        'row': 1,
        'column': 1,
        'display': '16'
      }
    }
  }
]

function filteredSpreadSheetsMock(email){
  return spreadsheetsMock.filter(sheet=> sheet.email == email)
}

class SpreadsheetServiceMock {
  async getSpreadSheets(email) {
    const spreadsheets = filteredSpreadSheetsMock(email)
    return Promise.resolve(spreadsheets)
  }

  async getSpreadSheet() {
    return Promise.resolve(spreadsheetsMock[0])
  }

  async createSpreadSheet() {
    return Promise.resolve(spreadsheetsMock[0]._id)

  }

  async updateSpreadSheet() {
    return Promise.resolve(spreadsheetsMock[0])
  }

  async deleteSpreadSheet() {
    return Promise.resolve(spreadsheetsMock[0])
  }
}

module.exports = {
  spreadsheetsMock,
  filteredSpreadSheetsMock,
  SpreadsheetServiceMock
}