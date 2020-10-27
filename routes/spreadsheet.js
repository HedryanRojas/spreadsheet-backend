const express = require('express')
const Injector = require('../utils/injector')

const {
  spreadsheetIdSchema,
  spreadSheetEmailSchema,
  createSpreadsheetSchema,
  updateSpreadsheetSchema
} = require('../utils/schemas/spreadsheet')

const validationHandler = require('../utils/middlewares/validationHandler')

function spreadsheetApi(app) {
  const router = express.Router()
  app.use('/api/spreadsheet', router)
  const spreadSheetService = Injector.inject('spreadsheet', Injector.SERVICE)

  router.get('/',validationHandler(spreadSheetEmailSchema, 'query'), async (req, res, next) => {
    const { email } = req.query
    try {
      const spreadsheets = await spreadSheetService.getSpreadSheets(email)
      res.status(200).json({
        data: spreadsheets,
        message: 'spreadsheets listed'
      })
    } catch (err) {
      next(err)
    }
  })

  router.get('/:spreadsheetId', validationHandler(spreadsheetIdSchema, 'params'), async (req, res, next) => {

    const { spreadsheetId } = req.params

    try {
      const spreadsheet = await spreadSheetService.getSpreadSheet(spreadsheetId)
      res.status(200).json({
        data: spreadsheet,
        message: 'spreadsheet retrieved'
      })
    } catch (err) {
      next(err)
    }
  })

  router.post('/', validationHandler(createSpreadsheetSchema), async (req, res, next) => {
    const { body: spreadsheet } = req
    try {
      const id = await spreadSheetService.createSpreadSheet(spreadsheet)

      res.status(201).json({
        data: id,
        message: 'spreadsheet saved'
      })
    } catch (err) {
      next(err)
    }
  })

  router.put('/:spreadsheetId', validationHandler(updateSpreadsheetSchema), async (req, res, next) => {
    const { spreadsheetId } = req.params
    const { body } = req

    try {
      const id = await spreadSheetService.updateSpreadSheet(
        spreadsheetId,
        body
      )

      res.status(200).json({
        data: id,
        message: 'spreadsheet saved'
      })
    } catch (err) {
      next(err)
    }
  })

  router.delete('/:spreadsheetId', async (req, res, next) => {
    const { spreadsheetId } = req.params

    try {
      const id = await spreadSheetService.deleteSpreadSheet(spreadsheetId)
      res.status(200).json({
        data: id,
        message: 'spreadsheet deleted'
      })
    } catch (err) {
      next(err)
    }
  })
}

module.exports = spreadsheetApi