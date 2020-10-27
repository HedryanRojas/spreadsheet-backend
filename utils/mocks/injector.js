const { SpreadsheetServiceMock } = require('./spreadsheet')

const inject = (clazzname) => {
  console.log('Injecting service mock')
  switch (clazzname) {
  case 'spreadsheet': return new SpreadsheetServiceMock()
  default: null
  }
}
const InjectorMock = {inject}
module.exports = InjectorMock 