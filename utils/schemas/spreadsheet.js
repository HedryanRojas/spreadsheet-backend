const Joi = require('@hapi/joi')

const idSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/)
const emailSchema = Joi.string().email()
const nameSchema = Joi.string().max(30)
const dataSchema = Joi.object()

const createSpreadsheetSchema = Joi.object({
  email: emailSchema.required(),
  name: nameSchema.required(),
  data: dataSchema.required()
})
const updateSpreadsheetSchema = Joi.object({
  name: nameSchema,
  data: dataSchema,
})

const spreadsheetIdSchema = Joi.object({
  spreadsheetId: idSchema.required()
})

const spreadSheetEmailSchema = Joi.object({
  email: emailSchema.required()
})


module.exports = {
  spreadsheetIdSchema,
  spreadSheetEmailSchema,
  createSpreadsheetSchema,
  updateSpreadsheetSchema
}