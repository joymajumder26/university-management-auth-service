import express, { Application, Request, Response } from 'express'
// import usersService from './app/modules/users.service'
import usersRouter from './app/modules/users.route'
import cors from 'cors'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(app.get('env'))
//application routes
app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', async (req: Request, res: Response) => {
  // console.log('++++++++++++++');
  // await usersService.createUser({
  //   id:"0001",
  //   password:"415",
  //   role:"student",
  // })
  res.send('Working successfully')
})

export default app
