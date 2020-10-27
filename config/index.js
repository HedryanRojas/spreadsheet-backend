require('dotenv').config()
const config = {
  dev: process.env.NODE_ENV !== undefined,
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  cors: process.env.CORS,
}

module.exports = { config }