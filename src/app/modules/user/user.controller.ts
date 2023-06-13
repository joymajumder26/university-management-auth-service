import { RequestHandler } from 'express'
import { UserService } from './user.service'

// import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    //req-validation
    //body -->object
    //data -->object

    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (error) {
    next(error)
    // res.status(400).json({
    //   sucess: false,
    //   message: 'Failed to create user',
    // })
  }
}

export const UserController = {
  createUser,
}
