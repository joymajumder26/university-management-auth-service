import config from '../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.untills'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  console.log('user', user)
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  console.log('createdUser', createdUser)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
