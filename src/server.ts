import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is connected successfully`)

    app.listen(config.port, () => {
      logger.info(`application  listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Failed to connect database`, err)
  }
}
main()
