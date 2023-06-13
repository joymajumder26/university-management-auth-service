import express, { Application } from 'express'
// import usersService from './app/modules/users.service'

import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user.route'

const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(app.get('env'))
//application routes
app.use('/api/v1/users/', UserRoutes)

//testing
// app.get('/', async(req: Request, res: Response, next: NextFunction) => {

// throw new Error("Testing error logger")
// })
//global error handler
app.use(globalErrorHandler)

export default app
